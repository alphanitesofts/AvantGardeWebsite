import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useGetsingleArticleQuery } from '../features/articles/getArticlesApi';
import { useParams } from 'react-router-dom';
const imageUrl = 'https://avantgardeimages.alphanitesofts.net/'

const SingleProduct = () => {
  const { productId } = useParams();
  let { data, isError, isLoading } = useGetsingleArticleQuery(productId)
  console.log(data, "single article")
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError || !data) {
    return <p>Error loading data</p>;
  }

  return (
    <div>
      <div>
        <div className="breadcumb_area pt-5">
          <div className="container">
            {/* <div className="row">
              <div className="col-12">
                <ol className="breadcrumb d-flex align-items-center">
                  <li className="breadcrumb-item"><a href="#">Home</a></li>
                  <li className="breadcrumb-item"><a href="#">Dresses</a></li>
                  <li className="breadcrumb-item active">Long Dress</li>
                </ol>
                <a href="#" className="backToHome d-block"><i className="fa fa-angle-double-left" /> Back to Category</a>
              </div>
            </div> */}
          </div>
        </div>
        <section className="single_product_details_area section_padding_0_100">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="single_product_thumb">
                  <div id="product_details_slider" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      {data?.data.image && data?.data.image.length > 0 ? (
                        data?.data.image.map((pic, index) => (
                          <li
                            key={index}
                            className={index === 0 ? 'active' : ''}
                            data-target="#product_details_slider"
                            data-slide-to={index}
                            style={{ backgroundImage: `url(${imageUrl}${pic})` }}
                          />
                        ))
                      ) : (
                        <>
                          <li
                            data-target="#product_details_slider"
                            data-slide-to={0}
                            className="active"
                            style={{ backgroundImage: 'url(https://avantgardeoriginal.com/cdn/shop/files/DSC06674copy2-MIN-website.jpg?v=1698835585&width=533)' }}
                          />
                          <li
                            data-target="#product_details_slider"
                            data-slide-to={1}
                            style={{ backgroundImage: 'url(https://avantgardeoriginal.com/cdn/shop/files/DSC06709copy2-MIN.jpg?v=1698835585)' }}
                          />
                          <li
                            data-target="#product_details_slider"
                            data-slide-to={2}
                            style={{ backgroundImage: 'url(https://avantgardeoriginal.com/cdn/shop/files/DSC06689copy2-MIN.jpg?v=1698835585)' }}
                          />
                        </>
                      )}
                    </ol>
                    <div className="carousel-inner">
                      {data?.data.image && data?.data.image.length > 0 ? (
                        data?.data.image.map((pic, index) => (
                          <div
                            key={index}
                            className={`carousel-item${index === 0 ? ' active' : ''}`}
                          >
                            <a className="gallery_img" href={`${imageUrl}${pic}`}>
                              <img className="d-block w-100" src={`${imageUrl}${pic}`} alt={`Slide ${index + 1}`} />
                            </a>
                          </div>
                        ))
                      ) : (
                        <>
                          <div className="carousel-item active">
                            <a className="gallery_img" href="https://avantgardeoriginal.com/cdn/shop/files/DSC06674copy2-MIN-website.jpg?v=1698835585&width=533">
                              <img className="d-block w-100" src="https://avantgardeoriginal.com/cdn/shop/files/DSC06674copy2-MIN-website.jpg?v=1698835585&width=533" alt="Fallback Slide 1" />
                            </a>
                          </div>
                          <div className="carousel-item">
                            <a className="gallery_img" href="https://avantgardeoriginal.com/cdn/shop/files/DSC06709copy2-MIN.jpg?v=1698835585">
                              <img className="d-block w-100" src="https://avantgardeoriginal.com/cdn/shop/files/DSC06709copy2-MIN.jpg?v=1698835585" alt="Fallback Slide 2" />
                            </a>
                          </div>
                          <div className="carousel-item">
                            <a className="gallery_img" href="https://avantgardeoriginal.com/cdn/shop/files/DSC06689copy2-MIN.jpg?v=1698835585">
                              <img className="d-block w-100" src="https://avantgardeoriginal.com/cdn/shop/files/DSC06689copy2-MIN.jpg?v=1698835585" alt="Fallback Slide 3" />
                            </a>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="single_product_desc">
                  <h4 className="title"><a href="#">{data?.data.cat_name}</a></h4>
                  <h4 className="price">{data?.data.price}</h4>
                  <p className="available">Available: <span className="text-muted">In Stock</span></p>
                  <div className="single_product_ratings mb-15">
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star" aria-hidden="true" />
                    <i className="fa fa-star-o" aria-hidden="true" />
                  </div>
                  <div className="widget size mb-50">
                    <h6 className="widget-title">Size</h6>
                    <div >
                      <ul className='d-flex'>
                        {data.data?.sub_datas.map((item => (
                          <li className='border border-dark rounded py-1 px-2 mx-2'><a href="#">{item.size}</a></li>
                        )))}

                        {/* <li><a href="#">34</a></li>
                        <li><a href="#">36</a></li>
                        <li><a href="#">38</a></li>
                        <li><a href="#">40</a></li>
                        <li><a href="#">42</a></li> */}
                      </ul>
                    </div>
                  </div>
                  {/* Add to Cart Form */}
                  <form className="cart clearfix mb-50 d-flex" method="post">
                    <div className="quantity">
                      <span className="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"><i className="fa fa-minus" aria-hidden="true" /></span>
                      <input type="number" className="qty-text" id="qty" step={1} min={1} max={12} name="quantity" defaultValue={1} />
                      <span className="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i className="fa fa-plus" aria-hidden="true" /></span>
                    </div>
                    <button type="submit" name="addtocart" value={5} className="btn cart-submit d-block">Add to cart</button>
                  </form>
                  <div id="accordion" role="tablist">
                    <div className="card">
                      <div className="card-header" role="tab" id="headingOne">
                        <h6 className="mb-0">
                          <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Information</a>
                        </h6>
                      </div>
                      <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                        <div className="card-body">
                          <p>{data.data.description ? data.data.description : "No Description"}</p>
                          <p>Approx length 66cm/26" (Based on a UK size 8 sample) Mixed fibres</p>
                          <p>The Model wears a UK size 8/ EU size 36/ US size 4 and her height is 5'8"</p>
                          <span>
                            <img src={`${imageUrl}${data.data.size_chart_img}`} />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingTwo">
                        <h6 className="mb-0">
                          <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Materials</a>
                        </h6>
                      </div>
                      <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                        <div className="card-body">
                          <p>{data.data?.material}</p>
                          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia magnam laborum eaque.</p> */}
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" role="tab" id="headingThree">
                        <h6 className="mb-0">
                          <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">shipping &amp; Returns</a>
                        </h6>
                      </div>
                      <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                        <div className="card-body">
                          <p>7 Days return or exchange if the tag is not removed</p>
                          {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae qui maxime consequatur laudantium temporibus ad et. A optio inventore deleniti ipsa.</p> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  )
}

export default SingleProduct