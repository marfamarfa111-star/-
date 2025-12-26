// პრეზენტაციის მონაცემები - 8 სლაიდი
const slidesData = [
    {
        title: "შესავალი რომის მემკვიდრეობით სამართალში",
        content: `
            <p>რომაული სამართალი წარმოადგენდა ერთ-ერთ ყველაზე განვითარებულ სამართლებრივ სისტემას ანტიკურ სამყაროში, სადაც მემკვიდრეობა იყო მნიშვნელოვან ეკონომიკურ და სოციალური როლის მქონე სფერო. მემკვიდრეობითი სამართალი გულისხმობდა გარდაცვლილი პირის ქონების გადაცემას
             განსაზღვრული წესების მიხედვით სხვა პირებზე, ძირითადად ოჯახის წევრებზე ან სავალდებულო მემკვიდრეობითი პირების მიხედვით.</p>
        `
    },
    {
        title: "მემკვიდრეობის ძირითადი ფორმები",
        content: `
            <p>რომაულ სამართალში მემკვიდრეობა ძირითადად ორ ფორმად იყოფოდა:

ნებაყოფლობითი მემკვიდრეობა – ეს არის გარდაცვლილის ნებით განსაზღვრული მემკვიდრეობა, რომელსაც იგი სიცოცხლეში წყვეტდა. ამ გზით შეიძლებოდა მემკვიდრეების არჩევა, ქონების გადანაწილება და პირობითი მემკვიდრეობის დაწესება.

კანონით განსაზღვრული მემკვიდრეობა – ეს ფორმა გამოიყენებოდა იმ შემთხვევაში, თუ ადამიანი ვერ ან არ ტოვებდა ნებაყოფლობით მემკვიდრეობას. ასეთ დროს ქონება გადაეცემოდა კანონით განსაზღვრულ მემკვიდრეებს, ძირითადად ოჯახის წევრებს.</p>
        `
    },
    {
        title: "მემკვიდრეობის ტიპები და სამართლებრივი რეგულაციები",
        content: `
            <p>რომაულ სამართალში მემკვიდრეობის რამდენიმე ტიპი არსებობდა:

სასამართლოში დადასტურებული მემკვიდრეობა – მემკვიდრეობის ფორმა, რომელიც სასამართლოს წინაშე შედგებოდა და აუცილებელი იყო სასამართლოს მიერ დამოწმება.

ფორმალური ცერემონიით შედგენილი მემკვიდრეობა – მემკვიდრეობა, რომელიც პირის აქტიურ მონაწილეობას საჭიროებდა და ითვალისწინებდა სპეციალურ წესებს ქონების გადაცემისთვის.

საზოგადოების წინაშე შემდგარი მემკვიდრეობა – ფართო საზოგადოების წინაშე შედგენილი მემკვიდრეობა, გამოიყენებოდა მნიშვნელოვან პოლიტიკურ პირებსა და დიდ ქონებაზე.</p>
        `
    },
    {
        title: "მემკვიდრეობის მიღება",
        content: `
            <p>რომაულ სამართალში მემკვიდრეები რამდენიმე კატეგორიად იყოფოდნენ:

ოჯახური მემკვიდრეები – პირები, რომლებიც პირდაპირ წარმოადგენდნენ ოჯახის ერთეულს, მაგალითად, ვაჟი ან ქალი ოჯახის უფროსის ქვეშ.

სისხლით დაკავშირებული ნათესავები – ნათესავები, რომლებიც გარკვეულ შემთხვევებში იღებდნენ მემკვიდრეობას.

კანონით განსაზღვრული მემკვიდრეები – მემკვიდრეები, რომლებსაც გარანტირებული ჰქონდათ მემკვიდრეობა იმ შემთხვევაში, თუ გარდაცვლილი ვერ დატოვებდა ნებაყოფლობით მემკვიდრეობას.</p>
        `
    },
    {
        title: "მემკვიდრეობის პროცედურები და წესები",
        content: `
            <p>გარდაცვლილის ქონება პირველად იყოფოდა მემკვიდრეს შორის.

მემკვიდრეობის მიღება შეიძლებოდა ორი გზით:

აღიარება – მემკვიდრე იღებდა მემკვიდრეობას.

უარყოფა – მემკვიდრე უარს ამბობდა მემკვიდრეობაზე.

თუ მემკვიდრე უარს აცხადებდა, ქონება გადადიოდა შემდეგ გვარში დაინტერესებულ პირებზე, რომლებიც სამართლებრივად უფლებამოსილნი იყვნენ მემკვიდრეობის მიღებისთვის.</p>
        `
    },
    {
        title: "მემკვიდრეობითი დავები",
        content: `
            <p>მემკვიდრეობის დავები ხშირად წარმოიშობიდა ნებაყოფლობითი მემკვიდრეობის ავთენტურობის, ქონების ოდენობის ან მემკვიდრის წილის გამო.

მემკვიდრეობის თანაბარი გადანაწილებისთვის არსებობდა სპეციალური სამართლებრივი ინსტრუმენტი, რომელიც საშუალებას აძლევდა სამართლებრივად გადაწყვეტილიყო დავა.

მემკვიდრეობითი დავები რეგულარულად განიხილავდნენ სასამართლოში, სადაც მიღებულ იქნა სამართლებრივი პრინციპები, რათა დავები სამართლიანად მოგვარდებოდა. </p>
        `
    },
    {
        title: "კანონიური ცვლილებები და პრინციპები",
        content: `
            <p>Lex Falcidia (ძვ.წ. 40 წ.) – საკანონმდებლო აქტის მიზანი იყო გარანტირებულად უზრუნველეყო მემკვიდრეს მინიმალური წილი ქონებიდან, მიუხედავად გარდაცვლილის მიერ დაწესებული ნებაყოფლობითი მემკვიდრეობის ჩანაწერებისა.

კოდექსი იუსტინიანე (6-ე ს.) – მოგვიანებით კოდიფიცირებული სამართალი, რომელიც საბოლოოდ განსაზღვრავდა მემკვიდრეობის წესებს, მემკვიდრეების კატეგორიებს და ნებაყოფლობითი მემკვიდრეობის ფორმას.</p>
        `
    },
    {
        title: "დასკვნა",
        content: `
            <p>რომაული მემკვიდრეობითი სამართალი ქმნიდა მყარ ნორმატიულ ჩარჩოს ქონების გადაცემისთვის და აერთიანებდა როგორც გარდაცვლილის ნებით დადგენილ მემკვიდრეობას, ასევე კანონის უზრუნველყოფას იმ შემთხვევაში, როცა ნებაყოფლობითი მემკვიდრეობა არ არსებობდა. იგი წარმოადგენდა სამართლის სისტემას, რომელიც უზრუნველყოფდა ოჯახური ქონების უწყვეტობას შთამომავლებისთვის და ასევე ახდენდა მნიშვნელოვან გავლენას თანამედროვე სამართლებრივ სისტემებზე.</p>
        `
    }
];

// DOM ელემენტები
let currentSlideIndex = 0;
let autoPlayInterval;
let isAutoPlaying = false;

// DOM-ის ჩატვირთვის მოლოდინი
document.addEventListener('DOMContentLoaded', function() {
    const slidesContainer = document.querySelector('.slides-container');
    const totalSlidesElement = document.getElementById('total-slides');
    const currentSlideElement = document.getElementById('current-slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const autoPlayBtn = document.getElementById('auto-play-btn');
    const restartBtn = document.getElementById('restart-btn');
    const fullscreenBtn = document.getElementById('fullscreen-btn');
    const clickSound = document.getElementById('click-sound');
    
    // სლაიდების ჩატვირთვა
    loadSlides();
    
    // ღილაკების მოვლენების დამუშავება
    prevBtn.addEventListener('click', showPreviousSlide);
    nextBtn.addEventListener('click', showNextSlide);
    autoPlayBtn.addEventListener('click', toggleAutoPlay);
    restartBtn.addEventListener('click', restartPresentation);
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    
    // კლავიატურის მოვლენები
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            showPreviousSlide();
        } else if (event.key === 'ArrowRight') {
            showNextSlide();
        } else if (event.key === ' ') {
            toggleAutoPlay();
        } else if (event.key === 'f' || event.key === 'F') {
            toggleFullscreen();
        } else if (event.key === 'Home') {
            restartPresentation();
        }
    });
    
    // სლაიდების ჩატვირთვის ფუნქცია
    function loadSlides() {
        slidesData.forEach((slideData, index) => {
            const slideElement = document.createElement('div');
            slideElement.className = `slide ${index === 0 ? 'active' : ''}`;
            slideElement.innerHTML = `
                <h2 class="slide-title">${slideData.title}</h2>
                <div class="slide-content">${slideData.content}</div>
            `;
            slidesContainer.appendChild(slideElement);
        });
        
        // მთლიანი სლაიდების რაოდენობის განახლება
        totalSlidesElement.textContent = slidesData.length;
        currentSlideElement.textContent = currentSlideIndex + 1;
    }
    
    // წინა სლაიდის ჩვენება
    function showPreviousSlide() {
        playClickSound();
        if (currentSlideIndex > 0) {
            changeSlide(currentSlideIndex - 1);
        } else {
            // თუ პირველ სლაიდზე ვართ, ბოლოზე გადავიდეთ
            changeSlide(slidesData.length - 1);
        }
    }
    
    // შემდეგი სლაიდის ჩვენება
    function showNextSlide() {
        playClickSound();
        if (currentSlideIndex < slidesData.length - 1) {
            changeSlide(currentSlideIndex + 1);
        } else {
            // თუ ბოლო სლაიდზე ვართ, პირველზე გადავიდეთ
            changeSlide(0);
        }
    }
    
    // სლაიდის შეცვლა
    function changeSlide(newIndex) {
        const slides = document.querySelectorAll('.slide');
        slides[currentSlideIndex].classList.remove('active');
        slides[newIndex].classList.add('active');
        currentSlideIndex = newIndex;
        
        // ინდიკატორის განახლება
        currentSlideElement.textContent = currentSlideIndex + 1;
        
        // ანიმაცია ინდიკატორისთვის
        currentSlideElement.style.animation = 'none';
        setTimeout(() => {
            currentSlideElement.style.animation = 'pulse 0.5s ease';
        }, 10);
    }
    
    // ავტომატური გადართვის ჩართვა/გამორთვა
    function toggleAutoPlay() {
        playClickSound();
        if (isAutoPlaying) {
            stopAutoPlay();
            autoPlayBtn.innerHTML = '<i class="fas fa-play"></i> ავტო-გადართვა';
            autoPlayBtn.style.background = 'rgba(26, 24, 28, 0.95)';
        } else {
            startAutoPlay();
            autoPlayBtn.innerHTML = '<i class="fas fa-pause"></i> შეჩერება';
            autoPlayBtn.style.background = 'linear-gradient(145deg, rgba(212, 175, 55, 0.4), rgba(212, 175, 55, 0.25))';
        }
    }
    
    // ავტომატური გადართვის დაწყება
    function startAutoPlay() {
        isAutoPlaying = true;
        autoPlayInterval = setInterval(showNextSlide, 6000); // ყოველ 6 წამში
    }
    
    // ავტომატური გადართვის გაჩერება
    function stopAutoPlay() {
        isAutoPlaying = false;
        clearInterval(autoPlayInterval);
    }
    
    // პრეზენტაციის თავიდან დაწყება
    function restartPresentation() {
        playClickSound();
        changeSlide(0);
        if (isAutoPlaying) {
            stopAutoPlay();
            autoPlayBtn.innerHTML = '<i class="fas fa-play"></i> ავტო-გადართვა';
            autoPlayBtn.style.background = 'rgba(26, 24, 28, 0.95)';
        }
        
        // ანიმაცია რესტარტისთვის
        restartBtn.style.animation = 'none';
        setTimeout(() => {
            restartBtn.style.animation = 'pulse 0.7s ease';
        }, 10);
    }
    
    // სრულ ეკრანზე გადართვა
    function toggleFullscreen() {
        playClickSound();
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
            fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i> ეკრანიდან გამოსვლა';
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i> სრულ ეკრანზე';
            }
        }
    }
    
    // ხმის ეფექტის დაკვრა
    function playClickSound() {
        clickSound.currentTime = 0;
        clickSound.play().catch(e => console.log("ხმის დაკვრა ვერ მოხერხდა:", e));
    }
    
    // დამატებითი ანიმაციების დამატება
    addDecorativeAnimations();
    
    // ავტომატური გადართვის ავტომატური დაწყება 8 წამის შემდეგ
    setTimeout(() => {
        if (!isAutoPlaying) {
            startAutoPlay();
            autoPlayBtn.innerHTML = '<i class="fas fa-pause"></i> შეჩერება';
            autoPlayBtn.style.background = 'linear-gradient(145deg, rgba(212, 175, 55, 0.4), rgba(212, 175, 55, 0.25))';
        }
    }, 8000);
});

// დეკორატიული ანიმაციების დამატება
function addDecorativeAnimations() {
    // ფონზე მცურავი ელემენტების დამატება
    const backgroundImage = document.querySelector('.background-image');
    
    // რამდენიმე მცურავი ელემენტის შექმნა
    const elementCount = 20;
    for (let i = 0; i < elementCount; i++) {
        const floatingElement = document.createElement('div');
        floatingElement.className = 'floating-element';
        floatingElement.style.position = 'absolute';
        const size = Math.random() * 12 + 4;
        floatingElement.style.width = size + 'px';
        floatingElement.style.height = size + 'px';
        
        // სხვადასხვა ფერები და ფორმები
        if (i % 4 === 0) {
            // წრეები
            floatingElement.style.backgroundColor = 'rgba(212, 175, 55, 0.25)';
            floatingElement.style.borderRadius = '50%';
            floatingElement.style.boxShadow = '0 0 8px rgba(212, 175, 55, 0.3)';
        } else if (i % 4 === 1) {
            // კვადრატები
            floatingElement.style.backgroundColor = 'rgba(230, 177, 126, 0.2)';
            floatingElement.style.borderRadius = '3px';
            floatingElement.style.boxShadow = '0 0 6px rgba(230, 177, 126, 0.2)';
        } else if (i % 4 === 2) {
            // რომაული სიმბოლოები (გამარტივებული)
            floatingElement.style.backgroundColor = 'rgba(120, 100, 80, 0.15)';
            floatingElement.style.borderRadius = '1px';
            floatingElement.style.transform = 'rotate(45deg)';
            floatingElement.style.boxShadow = '0 0 5px rgba(120, 100, 80, 0.2)';
        } else {
            // ხაზები
            floatingElement.style.width = Math.random() * 20 + 5 + 'px';
            floatingElement.style.height = '2px';
            floatingElement.style.backgroundColor = 'rgba(212, 175, 55, 0.15)';
            floatingElement.style.borderRadius = '1px';
        }
        
        floatingElement.style.left = Math.random() * 100 + 'vw';
        floatingElement.style.top = Math.random() * 100 + 'vh';
        
        // ანიმაციის პარამეტრები
        const duration = Math.random() * 40 + 25 + 's';
        const delay = Math.random() * 8 + 's';
        const direction = i % 2 === 0 ? 'normal' : 'reverse';
        
        floatingElement.style.animation = `float ${duration} infinite ${direction} linear ${delay}`;
        backgroundImage.appendChild(floatingElement);
    }
    
    // CSS ანიმაციის დამატება მცურავი ელემენტებისთვის
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0) translateX(0) rotate(0deg);
                opacity: 0.5;
            }
            25% {
                transform: translateY(-30px) translateX(15px) rotate(90deg);
                opacity: 0.3;
            }
            50% {
                transform: translateY(-60px) translateX(30px) rotate(180deg);
                opacity: 0.6;
            }
            75% {
                transform: translateY(-30px) translateX(15px) rotate(270deg);
                opacity: 0.3;
            }
            100% {
                transform: translateY(0) translateX(0) rotate(360deg);
                opacity: 0.5;
            }
        }
        
        /* 8-ე სლაიდისთვის სპეციალური ეფექტი */
        .slide:nth-child(8) .slide-title {
            background: linear-gradient(90deg, #d4af37, #e6b17e, #d4af37);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            background-size: 200% auto;
            animation: gradientShift 3s ease-in-out infinite alternate;
        }
        
        @keyframes gradientShift {
            0% {
                background-position: 0% center;
            }
            100% {
                background-position: 100% center;
            }
        }
    `;
    document.head.appendChild(style);
}