import React from "react";

function Features() {
  return (
    <div>
      {/* Features Component */}
      <section className="py-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2
                className="mb-4 display-5 text-center"
                style={{ fontFamily: 'Dancing Script', fontWeight: 'bold', fontSize: '3rem' }}
              >
                Your favourite Home Bakery.
              </h2>
              <p className="text-secondary mb-5 text-center" style={{ fontFamily: 'PlayFair Display',fontWeight:'bold' }}>
                If you are looking for delicious, homemade baked goods that are made with love and according to your taste buds, The Foodies Delight is the perfect place for you!
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div
            className="row gy-5 gx-md-4 gy-lg-0 gx-xxl-5 justify-content-center"
            style={{ fontFamily: 'PlayFair Display' }}
          >
            <div className="col-11 col-sm-6 col-lg-3 text-center">
              <div className="mb-4">
                <i className="bi bi-basket-fill" style={{ fontSize: '2rem', color: '#007bff' }}></i>
              </div>
              <h4 className="mb-3">Fresh, Homemade Baked Goods</h4>
              <p className="mb-3 text-secondary">
                All of the baked goods at The Foodies Delight are made on order using only the finest ingredients.
              </p>
            </div>
            <div className="col-11 col-sm-6 col-lg-3 text-center">
              <div className="mb-4">
                <i className="bi bi-egg-fill" style={{ fontSize: '2rem', color: '#007bff' }}></i>
              </div>
              <h4 className="mb-3">Eggless and Free of Chemicals</h4>
              <p className="mb-3 text-secondary">
                Shalini's baked goods are free of chemicals and artificial preservatives.
              </p>
            </div>
            <div className="col-11 col-sm-6 col-lg-3 text-center">
              <div className="mb-4">
                <i className="bi bi-stars" style={{ fontSize: '2rem', color: '#007bff' }}></i>
              </div>
              <h4 className="mb-3">Handcrafted to Perfection</h4>
              <p className="mb-3 text-secondary">
                Shalini takes great pride in her baking, and every item is handcrafted to perfection.
              </p>
            </div>
            <div className="col-11 col-sm-6 col-lg-3 text-center">
              <div className="mb-4">
                <i className="bi bi-palette-fill" style={{ fontSize: '2rem', color: '#007bff' }}></i>
              </div>
              <h4 className="mb-3">Customisable According to Your Needs</h4>
              <p className="mb-3 text-secondary">
                Be it eggless, vegan or keto cakes, we can customise the cakes just the way you like it.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;
