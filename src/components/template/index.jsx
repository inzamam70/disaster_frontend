import React from "react";

// import Contact from "../../pages/contact";
// import { HomeIndex } from "../../pages/homeindex";
import { Route, Routes } from "react-router-dom";
import "./index.css";
// import { Header } from "../header";
import { Sidenav } from "../sidenav";
import { Footer } from "../footer";

import Home from "../../pages/home/home";

import { Sliders } from "../../pages/sliders/list";
import { SliderCreate } from "../../pages/sliders/create";
import Contacts from "../../pages/contact/contacts";
import { SliderEdit } from "../../pages/sliders/edit";
import { SliderView } from "../../pages/sliders/view";

import { LandingCard } from "../../pages/landingcard/list";
import { LandingCardCreate } from "../../pages/landingcard/create";
import { LandingCardEdit } from "../../pages/landingcard/edit";
import { LandingCardView } from "../../pages/landingcard/view";

import { Navs } from "../../pages/nav/list";
import { NavCreate } from "../../pages/nav/create";
import { NavEdit } from "../../pages/nav/edit";
import { NavView } from "../../pages/nav/view";

import { Roles } from "../../pages/role/list";
import { RoleCreate } from "../../pages/role/create";
import { RoleEdit } from "../../pages/role/edit";
import { RoleView } from "../../pages/role/view";

import { RoleNavCreate } from "../../pages/rolenav/create";

import { Users } from "../../pages/Users/list";
import { USerCreate } from "../../pages/Users/create";
import { UserEdit } from "../../pages/Users/edit";
import { UserView } from "../../pages/Users/view";
import { Galleries } from "../../pages/galleries/list";
import { GalleryCreate } from "../../pages/galleries/create";
import { GalleryEdit } from "../../pages/galleries/edit";
import { GalleryView } from "../../pages/galleries/view";
import { AboutCreate } from "../../pages/abouts/create";
import { About } from "../../pages/abouts/list";
import { AboutEdit } from "../../pages/abouts/edit";
import { AboutView } from "../../pages/abouts/view";



export const Template = ({ children }) => {
    return (
        <div className="body">
            {/* <Header /> */}
            <Sidenav />
            <div className="t-template">

                <Routes>
                    <Route path='/' element={<Home />} />

                    <Route path='/users' element={<Users />} />
                    <Route path='/usercreate' element={<USerCreate />} />
                    <Route path='/useredit/:id' element={<UserEdit />} />
                    <Route path='/userview/:id' element={<UserView />} />
                    {/* <Route path='/contact' element={<Contact/>}/> */}
                    <Route path='/contacts' element={<Contacts />} />

                    <Route path="/sliders" element={<Sliders />} />
                    <Route path='/sliderCreate' element={<SliderCreate/>}/>
                    <Route path='/sliderEdit/:id' element={<SliderEdit/>}/>
                    <Route path='/sliderView/:id' element={<SliderView/>}/>

                    <Route path='/landingcards' element={<LandingCard/>}/>
                    <Route path='/landingcardCreate' element={<LandingCardCreate/>}/>
                    <Route path='/landingcardEdit/:id' element={<LandingCardEdit/>}/>
                    <Route path='/landingcardView/:id' element={<LandingCardView/>}/>

                    <Route path='/navs' element={<Navs/>}/>
                    <Route path='/navCreate' element={<NavCreate/>}/>
                    <Route path='/navEdit/:id' element={<NavEdit/>}/>
                    <Route path='/navView/:id' element={<NavView/>}/>

                    <Route path='/roles' element={<Roles/>}/>
                    <Route path='/roleCreate' element={<RoleCreate/>}/>
                    <Route path='/roleEdit/:id' element={<RoleEdit/>}/>
                    <Route path='/roleView/:id' element={<RoleView/>}/>

                    <Route path='/rolenav-create' element={<RoleNavCreate />} />

                    <Route path='/gallerys' element={<Galleries />} />
                    <Route path='/galleryCreate' element={<GalleryCreate />} />
                    <Route path='/galleryEdit/:id' element={<GalleryEdit />} />
                    <Route path='/galleryView/:id' element={<GalleryView />} />

                    <Route path='/abouts' element={<About />} />
                    <Route path='/aboutCreate' element={<AboutCreate />} />
                    <Route path='/aboutEdit/:id' element={<AboutEdit />} />
                    <Route path='/aboutView/:id' element={<AboutView />} />

                </Routes>

            </div>
            <Footer />
        </div>
    );
}