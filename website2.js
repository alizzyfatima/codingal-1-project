<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href=
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <script src=
    "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js">
        </script>
        <style>
            body{
                font-family: 'Times New Roman', Times, serif;
                margin: 0;
                padding: 0;
                background-color: rgb(99, 79, 55);

            }
            .container{
                max-width: 1200px;
                margin: 40px auto;
                padding: 20px;
            }
            .about{
                background: rgb(69, 119, 121) ;
                border-radius:0.5rem;
                padding: 40px;
                display: 40px;
                display: flex;
                flex-wrap: wrap;
                gap: 40px;  
                align-items: center;   
            }
            .about-img{
                width: 100%;
                max-width: 500px;
                height: 800px;
                border-radius: 8px;
                object-fit:cover;
            }
            .about-text{
                color: rgb(255, 255, 255);
                flex: 1;
                max-width: 900px;
            }
            .about-text h3{
                color: rgb(27, 9, 9);
                margin-bottom: 10px;
            }
            .about-text h1{
                margin-top: 0;
                margin-bottom: 20px;
                font-size: 28px;
            }
            .about-text p {
                line-height: 1.6;
                margin-bottom: 16px;
            }
            .card{
                height: 400px;
                width: 400px;
            }
        </style>
</head>
<body>
    <div id="about" class="container">
        <div class="about">
           <img class="about-img" src="https://th.bing.com/th/id/OIP.ahqymIQ4MYW8AIgBVsRozAHaJO?w=208&h=258&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="about img">
           <div class="about-text">
            <h3 class="text-primary"> About </h3>
            <h1> A little About The Brand</h1>
            <p>
                <b class="text-primary"> Alizee</b>is a clothing brand which includes <b class="text-primary">all fashion styles </b>
                .it not only is fashinoble but also has amzing soft material.
            </p>
            <p>
                It not only helps you or us ,but the costy prices are donated to the people of <b class="text-primary"> palestine.</b> 
                Since the major brand <b class="text-primary"> ZARA </b> gives its money to isreali forces. So it is a Win Win for both you as our customers,
                us for our clothing business and most importantly the Palestinians.
            </p>
            <p><b class="text-primary">Welcome to ALIZEE —</b> a clothing brand where elegance meets enduring charm. At the heart of our business lies a commitment to crafting exquisite apparel that celebrates the refined sophistication of yesteryears while embracing a modern flair. Every piece in our collection is a nod to the grace of classic fashion, designed for those who value quality, individuality, and timeless style.
            </p>
            <P><b class="text-primary">Why Choose Our Brand?</b>
                - A Blend of Heritage and Modernity:
                Our designs draw inspiration from iconic eras, seamlessly blending vintage aesthetics with contemporary touches. The result? Wardrobe pieces that feel both nostalgic and current.
               <br>
                - Unmatched Craftsmanship:
                From the finest fabrics to the intricate details in every stitch, we prioritize craftsmanship. Our clothing is created to stand the test of time, much like the legacy of classic fashion itself.
                <br>
                - For the Sophisticated Soul:
                Whether you're attending a high-society event or enjoying an intimate soirée, our collection ensures you exude sophistication without saying a word.
               <br>
                - Sustainably Minded:
                We honor the past by committing to a future-friendly approach, using ethical practices and sustainable materials wherever possible. Style with a conscience — that's our promise.
                <br>
                - Tailored Exclusivity:
                Owning our pieces feels like a membership to an elite club. Our limited-edition lines ensure that your style remains as distinctive as you.
                </P>
                <p><b class="text-primary">Our Commitment to You:</b>
                    At ALIZEE, we don’t just sell clothing — we curate experiences. When you wear our brand, you're stepping into a world of elegance, character, and unmatched charm. It's not just fashion; it's a statement of who you are.
                    </p>
            <button class="btn-outline-primary">Learn More</button>
        </div>
    </div>
    </div>
    <!--card-->
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card" style="width: 200px;">
                    <img class="card-img-top" src="data:image/webp;base64,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" alt="card-img-cap"> 
                    <div class="card-body>
                     <h2 class="card-title">
                     Alizy
                     </h2>
                     <p class="card-text">
                         Original founder and CEO of ALIZEE
                     </p>
                     <a href="" class="btn btn-primary ">
                       to know more about Alizy click this button
                     </a>
                    </div>  
                   </div>
               </div>
               <div class="col-md-4">
                <div class="card" style="width: 200px;">
                    <img class="card-img-top" src="https://i.pinimg.com/736x/c2/f9/e5/c2f9e5530d86cc3382262d5d96b00a4c.jpg" alt="card-img-cap"> 
                    <div class="card-body>
                     <h2 class="card-title">
                     Humayrah
                     </h2>
                     <p class="card-text">
                         Website developer.She Contributed 
                         her time and effort in creating this platfrom.
                     </p>
                     <a href="" class="btn btn-primary ">
                       to know more about Humayrah click this button
                     </a>
                    </div>  
                   </div>
               </div>
               <div class="col-md-4">
                <div class="card" style="width: 200px;">
                    <img class="card-img-top" src="https://www.bing.com/th/id/OIP.cBD1g4X4ElOrx94auGyL1wHaHa?w=192&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="card-img-cap"> 
                    <div class="card-body>
                     <h2 class="card-title">
                     Sami
                     </h2>
                     <p class="card-text">
                        Accountant. Manages finance of the business.
                     </p>
                     <a href="" class="btn btn-primary ">
                       to know more about Sami  click this button
                     </a>
                    </div>  
                   </div>
               </div>
                </div>
            </div>
            </div>
            <!--footer-->
            <footer>
                <div class="container text-muted text-center py-3 mt-5">
                    <h5>
                        copyright &copy;2025
                        <a class="text-warning text-decoration-none" herf="#about">
                            all rights are reserved by ALIZEE
                        </a>
                    </h5>
                </div>
            </footer>
     
</body>
</html>
