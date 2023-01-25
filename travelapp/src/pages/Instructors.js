import React from "react";


function Instructors(props){

    //destructurare props
    const {propColor , propNr , propText}=props;
    console.log("props from Instructors are : " , propColor , propNr , propText);

return(<>

<article id="instructors" className="bg-primary p-5">

<div className="container">

<h2>Instructors</h2>

<p className="lead text-left mb-5">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                      beatae fuga animi distinctio perspiciatis adipisci velit maiores
                      totam tempora accusamus modi explicabo accusantium consequatur,
                      praesentium rem quisquam molestias at quos vero.<br></br> Officiis ad
                      velit doloremque at.<br></br> Dignissimos praesentium necessitatibus
                      natus corrupti cum consequatur aliquam! Minima molestias iure
                      quam distinctio velit.
</p>

<div className="row g-3">

  <div className="col-md-6 col-lg-3">

     <div className="card bg-light">
         <div className="card-body text-center">

          <img src="https://randomuser.me/api/portraits/women/25.jpg" className="rounded-circle mb-3" alt="userApiImg" />

          <h3 className="card-title mb-3">Roxana Mihailescu</h3>

          <p className="card-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>


          <ul className="linksMedia">

          <li><a href="https://twitter.com/" target="_blank"><i className="bi bi-twitter text-black-50 mx-1"></i></a></li>
          <li><a href="https://facebook.com/" target="_blank"><i className="bi bi-facebook text-black-50 mx-1"></i></a></li>
          <li><a href="https://linkedin.com/" target="_blank"><i className="bi bi-linkedin text-black-50 mx-1"></i></a></li>
          <li><a href="https://instagram.com/" target="_blank"><i className="bi bi-instagram text-black-50 mx-1"></i></a></li>

          </ul>

         </div>
     </div>

  </div>







  <div className="col-md-6 col-lg-3">

     <div className="card bg-light">
         <div className="card-body text-center">

            <img src="https://randomuser.me/api/portraits/men/35.jpg" className="rounded-circle mb-3" alt="userApiImg" />

            <h3 className="card-title mb-3">Mihai Teodorescu</h3>

            <p className="card-text">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
              making it look like readable English.
            </p>


            <ul className="linksMedia">

          <li><a href="https://twitter.com/" target="_blank"><i className="bi bi-twitter text-black-50 mx-1"></i></a></li>
          <li><a href="https://facebook.com/" target="_blank"><i className="bi bi-facebook text-black-50 mx-1"></i></a></li>
          <li><a href="https://linkedin.com/" target="_blank"><i className="bi bi-linkedin text-black-50 mx-1"></i></a></li>
          <li><a href="https://instagram.com/" target="_blank"><i className="bi bi-instagram text-black-50 mx-1"></i></a></li>

          </ul>


         </div>
     </div>

  </div>










  <div className="col-md-6 col-lg-3">

     <div className="card bg-light">
         <div className="card-body text-center">

            <img src="https://randomuser.me/api/portraits/men/78.jpg" className="rounded-circle mb-3" alt="userApiImg" />

            <h3 className="card-title mb-3">Alin Popescu</h3>

            <p className="card-text">
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia,
              looked up one of the more obscure Latin words, consectetur, 
            from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
            </p>


            <ul className="linksMedia">

          <li><a href="https://twitter.com/" target="_blank"><i className="bi bi-twitter text-black-50 mx-1"></i></a></li>
          <li><a href="https://facebook.com/" target="_blank"><i className="bi bi-facebook text-black-50 mx-1"></i></a></li>
          <li><a href="https://linkedin.com/" target="_blank"><i className="bi bi-linkedin text-black-50 mx-1"></i></a></li>
          <li><a href="https://instagram.com/" target="_blank"><i className="bi bi-instagram text-black-50 mx-1"></i></a></li>

          </ul>


         </div>
     </div>

  </div>









  <div className="col-md-6 col-lg-3">

     <div className="card bg-light">
         <div className="card-body text-center">

  <img src="https://randomuser.me/api/portraits/women/75.jpg" className="rounded-circle mb-3" alt="userApiImg" />

  <h3 className="card-title mb-3">Andreea Costache</h3>

  <p className="card-text">
  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
   by injected humour, or randomised words which don't look even slightly believable. 
  </p>


  <ul className="linksMedia">

<li><a href="https://twitter.com/" target="_blank"><i className="bi bi-twitter text-black-50 mx-1"></i></a></li>
<li><a href="https://facebook.com/" target="_blank"><i className="bi bi-facebook text-black-50 mx-1"></i></a></li>
<li><a href="https://linkedin.com/" target="_blank"><i className="bi bi-linkedin text-black-50 mx-1"></i></a></li>
<li><a href="https://instagram.com/" target="_blank"><i className="bi bi-instagram text-black-50 mx-1"></i></a></li>

</ul>


         </div>
     </div>

  </div>










</div>

</div>

</article>

</>);


}

export default Instructors;