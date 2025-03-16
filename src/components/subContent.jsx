import 'bootstrap/dist/css/bootstrap.min.css'

export default function SubComponent(){
    return(
        <>
       <main className='home'>
           <div className='container row d-flex w-100  justify-center'>
                 <div className='col component-titules'>
                 <span className='content-titule w-50 d-flex justify-center justify-items-center'><h1> socket.demo </h1> <a href='$'> 0.0.1 </a></span>
                 <span className='content-titule w-50 d-flex justify-center justify-items-center'><h1> socket.demo </h1> <a href='$'> 0.0.2 </a></span>

                      <div className='component-titules'>
                      <span className='text-center d-grid font-stretch-50% w-50'><h2>Fast, unopinionated, minimalist web framework for  <span className='link:node'> <a href='$'> Node.js</a></span></h2></span>
                      <div className='code w-50'>
                    <code>
                        <figure>
                            <span className='text-gray npm-package'> $ npm install socket.demo --save--dev</span>
                        </figure>
                    </code>
                    </div>
                      </div>
                    <div className='d-flex'>
                    <div  class="figure w-100">
                         <img src="https://image.mux.com/b9YiUPYGCOrRedmzD601osIUvHGsda2Ro39CCDWwIlM00/thumbnail.png?time=0" class="figure-img img-fluid rounded w-20 img" alt="50"></img>
                               <figcaption class="figure-caption"> socket.demo </figcaption>
                                </div>
                        </div>     
                <section id='intro'>
                    <div id='boxes' className='clearfix'>
                    <div class="container">
                           <div class="row">
                                <div class="col">
                                <div id="web-applications">
      <h2>Web Applications</h2>
      <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
    </div>
                                 </div>
                           <div class="col">
                                 <h2> APIs socket.demo</h2>
                                 <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
                               </div>
                         <div class="col">
                                <h2> Perfomance </h2> 
                                <p>Express provides a thin layer of fundamental web application features, without obscuring Node.js features that you know and love.</p>
                           </div>
                         <div className='col'>
                               <h2> Midleware </h2>
                               <p> Express is a lightweight and flexible routing framework with minimal core features meant to be augmented through the use of Express middleware modules.</p>
                         </div>
                     </div>
                  </div>
                    </div>
                 </section>
                 </div>
           </div>
       </main>

       <footer className='w-full Bg-gray-800 text-white py-6'>
            <div className='container mx-auto text-center'>
                <p>&copy; 2025 socket.demo. Derechos reservados....</p>
                <nav className='mt-4 space-x-4'>
                     <a href="#" class="hover:text-gray-400">Política de Privacidad</a>
                     <a href="#" class="hover:text-gray-400">Términos de Servicio</a>
                     <a href="#" class="hover:text-gray-400">Contacto</a>
                </nav>

               <div className='languaes-international'>
                   <span>Documentation translations provided by StrongLoop/IBM:</span> <a href='$'> French, German, Spanish, Italian, Japanese, Russian, Chinese, Traditional Chinese, Korean, Portuguese.</a>
                   <span>Community translation available for</span>:<a href='$'> Slovak, Ukrainian, Uzbek, Turkish, Thai <span> and </span> Indonesian.</a>
               </div>
            </div>
        </footer> 
       </>
    )
}