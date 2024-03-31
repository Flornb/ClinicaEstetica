// <!-- reload page = scroll in 0 -->
        window.addEventListener('beforeunload', function () {
        window.scrollTo(0, 0);
    });

    //  js para desplegar submenus y clicks 
    
        document.addEventListener('DOMContentLoaded', function() {

            // hamburguer menu
            const menuToggle = document.querySelector('.menu-icon');
            const ulNav = document.querySelector('.ul-nav'); 

            menuToggle.addEventListener('click', function (event){
                event.stopPropagation();
                ulNav.classList.toggle('show');
            });

            document.body.addEventListener('click', function(event) {
            if (!event.target.closest('.menu-icon') && !event.target.closest('.ul-nav')) {
                ulNav.classList.remove('show');
                }
            });
        
            // <!-- function to close submenus -->
            function closeSubmenus() {
                treatmentsSubMenu.classList.remove('show');
                ulNav.classList.remove('show');
            }

            // new
            const links = document.querySelectorAll('.ul-nav a[href^="#"]');

            const treatmentsMenu = document.querySelector('.treatments-nav');
            const treatmentsSubMenu = document.querySelector('.treatments-list'); 

            links.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    event.stopPropagation();
                    closeSubmenus();
                    const targetId = link.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);
                

                    if (targetElement) {
                        const headerHeight = document.querySelector('.header').offsetHeight;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition - headerHeight;

                        window.scrollBy({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });

        // Add click event to submenu's elements
        treatmentsSubMenu.querySelectorAll('a').forEach (submenuLink => {
            submenuLink.addEventListener('click', function() {
            closeSubmenus(); 
            });
        });
            
        treatmentsMenu.addEventListener('click', function(event){
            if (event.target.tagName !== 'A') {           
                event.preventDefault();
            }
            treatmentsSubMenu.classList.toggle('show');
        });

        document.addEventListener('click', function(event){
            const targetElement = event.target;

            if(
                !targetElement.closest('.treatments-nav') &&
                !targetElement.closest('.treatments-list')) {
                treatmentsSubMenu.classList.remove('show');
                }
            });
        });
 
    // <!-- popup free evaluation -->
    
        $(".Click-here").on('click', function() {
            $(".custom-model-main").addClass('model-open');
        }); 
        $(".close-btn, .bg-overlay").click(function(){
            $(".custom-model-main").removeClass('model-open');
        });


  
   

    // <!-- owl carousel -->
    // <!-- carousel -->
    
        $(".custom-carousel").owlCarousel({
        autoWidth: true,
        loop: true,
        items: 4,
        });
        $(document).ready(function () {
            $(".custom-carousel .item").click(function () {
                $(".custom-carousel .item").not($(this)).removeClass("active");
                $(this).toggleClass("active");
            });
        });


    // <!--  header smaller on down scroll-->
    
        document.addEventListener('scroll', function() {
            const header = document.querySelector('.header');
            const logo = document.querySelector ('.logo');
            const scrollPosition = window.pageYOffset;

            if (scrollPosition > 0) {
                header.style.height = '80px';
                logo.style.height = '100px';
              
                
            } else {
                // console.log ('return to original size');
                header.style.height = '140px';
                logo.style.height = '160px';
            }
        });