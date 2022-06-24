import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

function Search() {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita id
            nemo, eaque quibusdam asperiores consequuntur. Officia earum odit
            corrupti est possimus, saepe molestiae necessitatibus quia quos? Cum
            minus deleniti voluptate. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Consequuntur sed esse, distinctio natus eaque
            atque laudantium a aperiam ipsa iste numquam pariatur aut quibusdam
            eum explicabo id, libero minus unde! Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Aspernatur ad, doloremque iure
            ratione voluptas blanditiis quos sint cum distinctio, odit deserunt
            natus, nihil saepe dolorem voluptatem nisi culpa! Adipisci, dolorum.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                all-inclusive company for 20 years in-a-row
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                all-inclusive company for 20 years in-a-row
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="pt-2">get an additional 10% off</p>
          <p className="py-4">12hours left</p>
          <p className="bg-gray-800 text-gray-200 py-2">book now and save</p>
        </div>
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
      </div>
    </div>
  );
}

export default Search;
