document.addEventListener('DOMContentLoaded', (event) => {
    const cover1 = document.getElementById('cover1');
    const cover2 = document.getElementById('cover2');
    const cover3 = document.getElementById('cover3');

    const darkmode = document.getElementById('dark');
    let dark = true;
    let coversel = 0;
    var fondoPortada, cardPortada, fontPortada, videocont, videocard, videoinfo;

    const nav = document.getElementById('nav');
    const rowcontainer = document.getElementById('rowFondo');
    const card = document.getElementById('card');
    const vcont = document.getElementById('videocont');
    const vcard = document.getElementById('videocard');
    const vinfo = document.getElementById('videoinfo');
    const vtxt = document.getElementById('videotxt');
    const vbtn = document.getElementById('toggleVideoBtn');
    const barra = document.getElementById('barra');
    const bars = document.getElementById('bars');

    var texts = [
    "","Dos chicos se conocen. Se hacen amigos. Se enamoran. Esta historia de amor entre dos chicos, uno de ellos declaradamente homosexual y el otro en vías de autodescubrimiento, nos recordará que hay primeros amores frágiles como el cristal y memorables como el diamante. Con los titubeos propios de cualquier amor adolescente, Heartstopper responde a la manera de sentir de los jóvenes reales, con una visión abierta, natural y sensible sobre el amor y la identidad sexual, sin perder nunca la delicadeza y la emoción.",
    "Nick y Charlie son mejores amigos. <br>Nick sabe que Charlie es gay, y Charlie está seguro que Nick no lo es. Pero los caminos del amor pueden ser sorprendentes, y Nick está descubriendo muchas cosas sobre sus amigos, su familia... y sobre sí mismo.",
    "El colegio organiza una excursión a París! Nick y Charlie van a aprovechar su visita a la ciudad del amor para contarles a sus compañeros sobre su relación, pero ¿se animarán? Charlie tiene terror de que Nick sufra el mismo bullying que le hicieron a él un año atrás al salir del armario. Y Nick está preocupado porque sospecha que algo le ocurre a Charlie y no sabe qué hacer. ¿Es normal que coma tan poco? ¿Debería hablar con él? Mientras tanto, Tao y Elle tendrán que hacerle frente a sus sentimientos, y Tara y Darcy van a contar su historia de amor para que Nick y Charlie se animen a compartir la suya con el mundo."
    ];
    var covers=[
        ,cover1, cover2, cover3
    ];

    loadStyles();

    function loadStyles(){
        if(coversel == 0){
            rowcontainer.classList.remove(fondoPortada);
            nav.classList.remove(fondoPortada);
            card.classList.remove(cardPortada);
            vcont.classList.remove(videocont);
            vcard.classList.remove(videocard);
            vinfo.classList.remove(videoinfo);
            vtxt.classList.remove(videoinfo);
            vbtn.classList.remove(videoinfo);
            barra.classList.remove(fondoPortada); 
            bars.classList.remove(fondoPortada); 
            fondoPortada = dark ? "fondoPortada" : "darkfondoPortada";
            rowcontainer.classList.add(fondoPortada); 
            nav.classList.add(fondoPortada); 

            cardPortada = dark ? "cardPortada" : "darkcardPortada"; 
            fontPortada = dark ? "font-portada" : "darkfont-portada"; 
            videocont = dark ? "video" : "darkvideo"; 
            videocard = dark ? "cardvideo" : "darkcardvideo"; 
            videoinfo = dark ? "videofont" : "darkvideofont"; 

            vcont.classList.add(videocont);
            vcard.classList.add(videocard);
            vinfo.classList.add(videoinfo);
            vtxt.classList.add(videoinfo);
            vbtn.classList.add(videoinfo);
            barra.classList.add(fondoPortada); 
            bars.classList.add(fondoPortada); 
        }else{
            rowcontainer.classList.remove(fondoPortada);
            nav.classList.remove(fondoPortada);
            card.classList.remove(cardPortada);
            vcont.classList.remove(videocont);
            vcard.classList.remove(videocard);
            vinfo.classList.remove(videoinfo);
            vtxt.classList.remove(videoinfo);
            vbtn.classList.remove(videoinfo);
            barra.classList.remove(fondoPortada); 
            bars.classList.remove(fondoPortada); 
            
            if(document.getElementById('content')){
                var p = document.getElementById('content').querySelector('p');
                p.classList.remove(fontPortada);
            }
            
            fondoPortada = dark ? "fondoPortada"+coversel : "darkfondoPortada"+coversel;
            cardPortada = dark ? "cardPortada"+coversel : "darkcardPortada"+coversel; 
            fontPortada = dark ? "font-portada"+coversel : "darkfont-portada"+coversel; 
            videocont = dark ? "video" : "darkvideo"; 
            videocard = dark ? "cardvideo" : "darkcardvideo"; 
            videoinfo = dark ? "videofont" : "darkvideofont";

            rowcontainer.classList.add(fondoPortada); 
            nav.classList.add(fondoPortada); 
            card.classList.add(cardPortada); 
            vcont.classList.add(videocont);
            vcard.classList.add(videocard);
            vinfo.classList.add(videoinfo);
            vtxt.classList.add(videoinfo);
            vbtn.classList.add(videoinfo);
            barra.classList.add(fondoPortada); 
            bars.classList.add(fondoPortada); 

            if(document.getElementById('content')){
                var p = document.getElementById('content').querySelector('p');
                p.classList.add(fontPortada);
            }
        }
    }

    function loadCoverSelected(){
        loadStyles();
        let space = document.createElement('div');
        space.classList.add('col-lg-1');
        rowcontainer.appendChild(space);
        
        for(i = 1; i <= 3; i++){
                let colcontainer = document.createElement("div");
                if(i == coversel){
                    card.classList.remove('col-8', 'col-md-4', 'col-lg-3');
    
                    rowcontainer.classList.remove(fondoPortada);
                    nav.classList.add(fondoPortada);
                    rowcontainer.classList.add(fondoPortada);
                    card.classList.add(cardPortada);
                    
                    card.classList.add('col-12','col-md-12','col-lg-5','col-xl-5');
    
                    let row = document.createElement('div');
                    row.id = 'content';
                    row.classList.add('text-justify', 'p-2', 'container-fluid', 'd-flex', 'row');
    
                    let content = document.createElement('div');
                    content.classList.add('text-justify', 'p-2', 'container-fluid', 'col-6', 'col-md-6',);
                    
    
                    let text = document.createElement('p');
                    text.classList.add("font", fontPortada, "mt-4", "mb-4");
                    text.innerHTML = texts[i];
    
                    let divcover = document.createElement('div');
                    divcover.classList.add('col-6', 'col-md-6',);
                    divcover.appendChild(covers[coversel]);
                    
                    content.appendChild(text);
                    
                    row.appendChild(divcover);
    
                    row.appendChild(content);
                    
                    card.appendChild(row);
                    rowcontainer.appendChild(card);
                }else{
                    if(coversel == 0){
                        card.classList.remove('col-5','col-md-5','col-lg-5','col-xl-5');
                    }
                    colcontainer.classList.add('col-12', 'col-md-2', 'col-lg-2', 'p-2', 'align-items-center');
                    colcontainer.appendChild(covers[i]);
                }
                if(colcontainer.childElementCount > 0) {
                    rowcontainer.appendChild(colcontainer);
                }
            // }
        }
    }

    if(darkmode) {
        darkmode.addEventListener('click', function(){
                dark = !dark;
                loadStyles();
        });

    }

    if(cover1){
        let clic = 1;
        cover1.addEventListener('click', function() {
            if(coversel === 1 && clic % 2 >= 0){
                clic ++;
                card.innerHTML = "";
                rowcontainer.innerHTML = "";
                if(clic % 2 == 0){
                    coversel = 1;
                    loadCoverSelected();
                }else{
                    reLoadCovers();
                }
            } else if(coversel != 0 ){
                card.innerHTML = "";
                rowcontainer.innerHTML = "";
                if(clic % 2 >= 0){
                    coversel = 1;
                    loadCoverSelected();
                }else{
                    reLoadCovers();
                }
            }else{
                card.innerHTML = "";
                rowcontainer.innerHTML = "";
                clic++;
                if(clic % 2 == 0){
                    coversel = 1;
                    loadCoverSelected();
                    
                }else{
                    reLoadCovers();
                    
                }
            }

        });
    }

    if(cover2){
        let clic = 1;
        cover2.addEventListener('click', function() {

            if(coversel === 2 && clic % 2 >= 0){
                clic ++;
                card.innerHTML = "";
                rowcontainer.innerHTML = "";
                if(clic % 2 == 0){
                    clic++;
                    coversel = 2;
                    loadCoverSelected();
                }else{
                    reLoadCovers();
                }
            } else if(coversel != 0 ){
                card.innerHTML = "";
                rowcontainer.innerHTML = "";
                if(clic % 2 >= 0){
                    coversel = 2;
                    loadCoverSelected();
                }else{
                    reLoadCovers();
                }
            }else{
                card.innerHTML = "";
                rowcontainer.innerHTML = "";
                clic++;
                if(clic % 2 == 0){
                    coversel = 2;
                    loadCoverSelected();
                    
                }else{
                    reLoadCovers();
                    
                }
            }
        });
    }

    if(cover3){
        let clic = 1;
        cover3.addEventListener('click', function() {
            if(coversel === 3 && clic % 2 >= 0){
                clic ++;
                card.innerHTML = "";
                rowcontainer.innerHTML = "";
                if(clic % 2 == 0){
                    coversel = 3;
                    loadCoverSelected();
                }else{
                    reLoadCovers();
                }
            } else if(coversel != 0 ){
                card.innerHTML = "";
                rowcontainer.innerHTML = "";
                if(clic % 2 >= 0){
                    coversel = 3;
                    loadCoverSelected();
                }else{
                    reLoadCovers();
                }
            }else{
                card.innerHTML = "";
                rowcontainer.innerHTML = "";
                clic++;
                if(clic % 2 == 0){
                    coversel = 3;
                    loadCoverSelected();
                    
                }else{
                    reLoadCovers();
                    
                }
            }
        });
    }

    function reLoadCovers(){
        coversel=0;
        rowcontainer.innerHTML = '';

        loadCoverSelected();
        
        nav.classList.remove(fondoPortada);
        rowcontainer.classList.remove(fondoPortada);
        card.classList.remove(cardPortada);
        rowcontainer.appendChild(card);
        loadStyles();
    }    


    //circulos
    const circles = document.querySelectorAll('.circle-progress-bar');
    const textsBar = document.querySelectorAll('.circle-text');

    function updateCircles() {
        circles.forEach((circle, index) => {
            const radius = circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            circle.style.strokeDasharray = `${circumference} ${circumference}`;

            
            const circleRect = circle.getBoundingClientRect();
            const scrollTop = window.scrollY || window.pageYOffset;
            const viewportHeight = window.innerHeight;

            
            const circleTop = circleRect.top + scrollTop;
            const circleBottom = circleTop + circleRect.height;

            if (circleBottom >= scrollTop && circleTop <= (scrollTop + viewportHeight)) {
                
                const visibleHeight = Math.min(circleBottom, scrollTop + viewportHeight) - Math.max(circleTop, scrollTop);
                const scrollPercent = (visibleHeight / circleRect.height) * 100;
                const percent = Math.min(scrollPercent, 90); 

                const offset = circumference - (percent / 100) * circumference;
                circle.style.strokeDashoffset = offset;

                textsBar[index].textContent = `${Math.round(percent)}%`;
            } else {
                // reinicio
                circle.style.strokeDashoffset = circumference;
                textsBar[index].textContent = `90%`;
            }
        });
    }

    updateCircles();

    document.addEventListener('scroll', updateCircles);
});