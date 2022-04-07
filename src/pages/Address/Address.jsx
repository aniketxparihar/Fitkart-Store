import React from "react";
import "./Address.css";

const Address = () => {
  return (
    <div>
      <main>
        <div id="main__container" className="bg-main-black">
          <div id="address__wrapper" className="p-2 ">
            <div className="flex flex-col product__container ">
              <div className=" flex flex-col">
                <heading className="h1 p-4 txt-main-white txt-gray-300 flex align-center">
                  Addresses{" "}
                  <i className="badge__icon material-icons relative p-5 txt-gray-400 pointer">
                    add_circle
                  </i>
                </heading>
              </div>
              <div className="address__container">
                <div className="address__name h3 txt-gray-200 p-4">
                  Dad's Place
                </div>
                <div className="address__line__one h6 txt-gray-400 p-4">
                  Apartment Building, 19th Avenue Rd. ,
                </div>
                <div className="address__line__two h6 txt-gray-400 p-4">
                  New Jersey, USA ,2020202
                </div>
              </div>
              <div className="address__container">
                <div className="address__name h3 txt-gray-200 p-4">
                  Brother's Place
                </div>
                <div className="address__line__one h6 txt-gray-400 p-4">
                  Apartment Building, 19th Avenue Rd. ,
                </div>
                <div className="address__line__two h6 txt-gray-400 p-4">
                  New Jersey, USA ,2020202
                </div>
              </div>
              <div className="address__container">
                <div className="address__name h3 txt-gray-200 p-4">
                  My Office
                </div>
                <div className="address__line__one h6 txt-gray-400 p-4">
                  Apartment Building, 19th Avenue Rd. ,
                </div>
                <div className="address__line__two h6 txt-gray-400 p-4">
                  New Jersey, USA ,2020202
                </div>
              </div>
              <div className="address__container relative">
                <div className="address__name h3 txt-gray-200 p-4">Home</div>
                <div className="address__line__one h6 txt-gray-400 p-4">
                  Apartment Building, 19th Avenue Rd. ,
                </div>
                <div className="address__line__two h6 txt-gray-400 p-4">
                  New Jersey, USA ,2020202
                </div>
                <div className="badge--right badge--large txt__badge txt-xl bg-dark-blue-200 font-sans absolute rounded-m">
                  Default
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Address;
