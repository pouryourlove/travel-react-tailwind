# :pushpin: EuroVoyage Tours
>유럽 여행 예약할 수 있는 사이트  
>https://eurovoyage.netlify.app/  

</br>

## 1. 프로젝트 소개
  -코로나로 인해 좋아하던 여행을 한동안 못가게 되어 아쉬웠습니다. 그런 마음을 담아 좋아하는 유럽    여행을 테마로 이 프로젝트를 제작하게 되었습니다.
  
## 2. 제작 기간 & 참여 인원
- 2022년 6월 24일 ~ 6월 29일 수정: 2023년 1월 28일
- 개인 프로젝트

</br>

## 3. 사용 기술

  - React.js 
  - Tailwind CSS
  - Git

</br>

## 4. Components

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

- react-icons을 사용함.
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
- State를 사용해 햄버거 메뉴 클릭시 모바일 메뉴 나오게 함
- State를 사용해 메뉴 클릭시 메인 로고 사라지게 함
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

-Video를 배경화면으로 함
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

-React Form으로 input 창 생성

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

-md(768px and up) 기준으로 반응형 디자인 만듬

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
- React from으로 select,input(date) 창 생성

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

- Props를 이용해 구현

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

- sm과 lg 기준으로 반응형 디자인 만듬

### 4.6. Carousel

State 이용해 Carousel 구현

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

-sm과 lg 기준으로 반응형 디자인 만듬


### 5. 문제 해결
- carousel에 관련된 코드를 작성하던 중 key props에 대한 오류 발생. 
- 문제 해결 관련 포스팅: https://velog.io/@pouryourlove/Warning-Each-child-in-a-list-should-have-a-unique-key-prop

## 6. 회고 / 느낀점
처음으로 Tailiwind CSS를 써본 프로젝트로 처음에는 사용이 많이 낯설었지만 써볼수록 왜 개발자들 사이에서 인기가 많은지 느낄 수 있었습니다. 첫번째로, 별도의 CSS파일을 작성하지 않고 한페이지에서 바로 작성할 수 있기 때문에 개발 시간을 많이 단축해 준다는 느낌이 들었습니다. 또 클래스 이름이 이미 정해져 있기 때문에 조금만 익숙해지면 훨씬 손쉽게 일관성 있는 디자인을 할 수 있다는 것이 매력적이었습니다. CSS 코드를 따로 작성 하지 않기 때문에 전체적으로 봤을 때 조금 복잡해 보인다는 단점도 있지만 장점들이 이 단점을 상쇄할만큼 매력적인 CSS 프레임워크라고 생각이 들었습니다. 이와는 별개로, carousel 컴포넌트에서 코드를 작성하고 나서 key props에 대한 오류가 발생했는데, 오류를 검색하고 해결하고 나니 알고보니 강의에서 공부했던 내용이었습니다. 확실히 강의로 공부하는 것보다 실제 만들어가면서 에러를 맞닥뜨리고 해결하는것이 기억에 더 많이 남는구나라는 것을 느끼게 된 에러였습니다.  
