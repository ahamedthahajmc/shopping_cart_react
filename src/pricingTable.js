import React, {useState} from "react";


function Pricing(){

    let data = [{
        title: "FREE",
        price: "$0",
        available:["Single User", "5GB Storage","Unlimited Public Projects","Community Access"],
        notAvailable:["Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain", "Monthly Status Reports"]
    },
    {
        title: "PLUS",
        price: "$9",
        available:["5 Users", "50GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Free Subdomain"],
        notAvailable:["Monthly Status Reports"]
    },
    {
        title: "PRO",
        price: "$49",
        available:["Unlimited Users", "150GB Storage", "Unlimited Public Projects", "Community Access", "Unlimited Private Projects", "Dedicated Phone Support", "Unlimited Free Subdomain","Monthly Status Reports"],
        notAvailable:[]
    }];

    return(
        <>
        <section class="pricing py-5">
            <div class="container">
                <div class="row">
                {data.map((ele)=>{
                    return (                
                    <div class="col-lg-4">
                        <div class="card mb-5 mb-lg-0">
                        <div class="card-body">
                            <h5 class="card-title text-muted text-uppercase text-center">{ele.title}</h5>
                            <h6 class="card-price text-center">{ele.price}<span class="period">/month</span></h6>
                            <ul class="fa-ul">
                                {ele.available.map((avail)=>{
                                    return <li><span class="fa-li"><i class="fas fa-check"></i></span>{avail}</li>
                                })}
                                {ele.notAvailable.map((notAvail)=>{
                                    return <li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>{notAvail}</li>
                            })}
                            </ul>
                            <div class="d-grid">
                            <a href="#" class="btn btn-primary text-uppercase">Button</a>
                            </div>
                        </div>
                        </div>
                    </div>
                )})}
                </div>
            </div>
            </section>
        </>

    )
}

export default Pricing;