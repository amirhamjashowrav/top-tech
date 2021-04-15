import React from 'react';

const Contact = () => {
    return (
       <section style={{backgroundColor: '#101010'}} className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary">GET IN TOUCH</h5>
                    <h1>Fill Up The Form Below</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address"/>
                       </div>
                       <br/>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject"/>
                       </div>
                       <br/>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message"></textarea>
                       </div>
                       <br/>
                       <div className="form-group text-center">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;