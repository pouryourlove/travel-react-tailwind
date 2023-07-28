# :pushpin: EuroVoyage Tours
>유럽 여행 예약할 수 있는 사이트  
>https://eurovoyage.netlify.app/  

</br>

## 1. 프로젝트 소개
  - EuroVoyage는 코로나로 인해 여행을 못 간 지난날의 그리움을 담아 유럽 여행을 테마로 제작된 웹 애플리케이션입니다.
  
## 2. 제작 기간 & 참여 인원
- 제작 기간: 2022년 6월 24일 ~ 6월 29일
- 수정: 2023년 1월 28일
- 개인 프로젝트

</br>

## 3. 사용 기술

  - React.js 
  - Tailwind CSS
  - Git

</br>

## 4. 주요 컴포넌트

Tailiwind CSS에서 global styling 기능을 사용함

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` css

//making a global style variable
:root {
  --primary-dark: #5651e5;
  --primary-light: #709dff;
}

.icon {
  color: var(--primary-dark);
}
  
@layer base {
  body {
    @apply font-[Stoke];
  }
  li {
    @apply p-4;
  }

  h1 {
    @apply text-3xl md:text-4xl font-bold;
  }

  h2 {
    @apply text-3xl font-bold;
  }
  h3 {
    @apply text-xl font-bold;
  }
  button {
    @apply p-3 border bg-gradient-to-r from-[var(--primary-dark)] to-[var(--primary-light)] text-white rounded-md;
  }
  .icon {
    @apply text-2xl cursor-pointer;
  }
}
```

</div>
</details>


### 4.1. Navbar

- react-icons 라이브러리를 사용한 아이콘 구현
<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
  <div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
  </div>  

```
</div>
</details>


- md(768px and up) 기준으로 반응형 디자인 만듬
- 반응형 디자인으로 모바일 화면에서는 햄버거 메뉴가 나타남
- State를 활용하여 메뉴 클릭시 메인 로고가 사라지도록 구현
<img src="https://user-images.githubusercontent.com/90593162/226845330-5df8ddf6-6d95-4763-a429-2f29592fd6da.gif">

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

.
.
.

      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <HiOutlineMenuAlt4 size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%] top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
        }
      >
        <ul>
          <h1>EUROPE</h1>
          <li className="border-b">Why us?</li>
          <li className="border-b">Book</li>
          <li className="border-b">Destination</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </ul>
      </div>

```
</div>
</details>

### 4.2. Hero

-비디오를 배경화면으로 사용한 섹션
<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
    <video
        className="w-full h-full object-cover"
        src={london}
        autoPlay
        loop
        muted
      />
```
</div>
</details>

-React form을 사용하여 input 창 생성

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
        <form className="flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90 mt-3">
          <div>
            <input
              className="bg-transparent w-[300px] sm:w-[400px] font-[Stoke] focus:outline-none pl-4 "
              type="text"
              placeholder="Search Destination"
            />
          </div>
          <div>
            <button>
              <AiOutlineSearch
                size={20}
                className="icon"
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
        </form>

```
</div>
</details>

### 4.3. Destinations

- 반응형 디자인을 적용하여 md(768px and up) 기준으로 다른 레이아웃 제공

<img src="https://user-images.githubusercontent.com/90593162/227235181-faa1f222-599a-45a3-90c4-4da6ef8bf0b6.gif">


<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={europe5}
          alt="/"
        />
        <img className="w-full h-full object-cover" src={europe1} alt="/" />
        <img className="w-full h-full object-cover" src={europe2} alt="/" />
        <img className="w-full h-full object-cover" src={europe3} alt="/" />
        <img className="w-full h-full object-cover" src={europe4} alt="/" />
      </div>

```
</div>
</details>

### 4.4. Search
- React form을 활용하여 select,input(date) 창 생성

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>London</option>
              <option>Paris</option>
              <option>Porto</option>
              <option>Madrid</option>
              <option>Helsinki</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-in</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Rates & Availabities</button>
        </form>

```
</div>
</details>

### 4.5. Selects & SelectCards

- Props를 이용하여 여러 장소 카드 구현

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
const SelectsCard = (props) => {
  return (
    <div className="relative">
      <img className="w-full h-full object-cover" src={props.bg} alt="/" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
          {props.text}
        </p>
      </div>
    </div>
  );
};

```
</div>
</details>

- 반응형 디자인으로 sm과 lg 기준에 맞게 다른 레이아웃 제공

### 4.6. Carousel

- State 이용하여 이미지 슬라이더 구현

<details>
<summary>코드 보기</summary>
<div markdown="1">

``` 
  const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length;

  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };

  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative flex justify-center items-center">
      <BsArrowLeftSquareFill
        onClick={prevSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer left-8 "
      />
      <BsArrowRightSquareFill
        onClick={nextSlide}
        className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"
      />

      {sliderData.map((item, index) => (
        //To show one at a time
        <div
          key={item.id}
          className={index === slide ? "opacity-100" : "opacity-0"}
        >
          {index === slide && (
            <img
              className="w-full rounded-md transition-all"
              src={item.url}
              alt="/"
            />
          )}
        </div>
      ))}
    </div>
  );
};


```
</div>
</details>

### 4.7. Footer

-반응형 디자인으로 sm과 lg 기준에 맞게 다른 레이아웃 제공


### 5. 문제 해결
🔍 carousel에 관련된 코드를 작성하던 중 key props에 대한 오류 발생. 

- item마다 고유한 key prop을 할당해주었고 sliderData에 id 값을 추가하였음. 
- 관련 블로그 포스팅: https://velog.io/@pouryourlove/Warning-Each-child-in-a-list-should-have-a-unique-key-prop
 
🔍 React carousel 로직이 이해가지 않아 구현에 어려움을 겪음.

- 구글링을 통해 로직을 공부하고 이해한 뒤 구현하였음.
- 관련 블로그 포스팅: https://velog.io/@pouryourlove/Warning-Each-child-in-a-list-should-have-a-unique-key-prop

## 6. 회고 / 느낀점
이번 프로젝트를 진행하며 새로운 기술인 Tailiwind CSS를 처음으로 써보았는데, 처음에는 사용이 낯설었지만 시간이 지날수록 그 매력을 점점 느낄 수 있었습니다. Tailwind CSS를 사용하면 별도의 CSS 파일을 작성하지 않고도 페이지 내에서 직접 디자인을 구성할 수 있어서 개발 시간을 크게 절약할 수 있었습니다. 또, 클래스 이름이 이미 정해져 있기 때문에 조금만 익숙해지면 훨씬 손쉽게 일관성 있는 디자인을 할 수 있다는 것이 매력적이었습니다. 하지만 CSS 코드를 따로 작성 하지 않기 때문에 전체적으로 봤을 때 코드가 복잡해 보여 아쉬웠습니다. 그래도 장점들이 이 단점을 상쇄할만큼 매력적인 CSS 프레임워크라고 생각합니다.  

carousel 컴포넌트에서 코드를 작성할때는 key props에 대한 오류가 발생했는데, 오류를 검색한 후 해결하고 생각해보니 분명 강의를 들으면서 공부했던 내용이었습니다. 강의를 통해 공부하는 것도 중요하지만, 실제로 프로젝트를 만들면서 발생하는 오류들을 직접 해결해나가는 과정에서의 배움의 가치가 깊게 느껴졌습니다. 앞으로도 계속해서 더 나은 프로젝트를 만들기 위해 노력하고, 새로운 기술에도 도전해보고 싶습니다. 

