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

## 4. 개발 과정

Tailiwind CSS에서 global styling 기능을 사용하였습니다.

<details>
<summary>코드 보기</summary>
<div markdown="1">

```
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
- react-icons을 사용하였습니다
```
<div className="hidden md:flex">
        <BiSearch className="mr-2" size={20} />
        <BsPerson size={20} />
</div>
```

- Tailiwind CSS 사용해 반응형으로 Navbar를 만들었습니다



 
 
  

- Navbar
  - Tailwind CSS를 이용하여 CSS를 구현하였습니다.
  - React로 from UI를 구현하였습니다. 
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


## 6. 회고 / 느낀점
