import React from "react";
import Event from "./Event";

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="time">8 am</td>
            <td></td>
            <td></td>
            <Event event="Dunkin' 🍩" color="dunkin" location="101 W 23rd St" />
            <Event
              event="Starbucks ☕️"
              color="coffee"
              location="177 8th Ave"
            />
            <td></td>
            <Event
              event="CaféIntegral🥐"
              color="coffee"
              location=" 149 Elizabeth St"
            />
            <td></td>
          </tr>
          <tr>
            <td className="time">9 am</td>
            <td></td>
            <Event
              event="Starbucks ☕️"
              color="coffee"
              location="750 6th Ave"
            />
            <td></td>
            <Event
              event="Liberty Island"
              color="park"
              location="Upper New York Bay"
            />
            <Event event="Abraço ☕️" color="coffee" location="81 E 7th St" />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10 am</td>
            <td></td>
            <Event
              event="Rockefeller 🏛️"
              color="blue"
              location="45 Rockefeller Plaza"
            />
            <Event
              event="911 Memorial"
              color="memorial"
              location="180 Greenwich St"
            />
            <Event event="Liberty Island" color="park" location="81 E 7th St" />
            <td></td>
            <Event
              event="Macy's ☺️"
              color="shopping"
              location="151 W 34th St."
            />
            <Event
              event="787 Coffee☕️"
              color="coffee"
              location="131 E 7th St"
            />
          </tr>
          <tr>
            <td className="time">11 am</td>
            <Event
              event="Hotel Checkin 🏨"
              color="yellow"
              location="152 W 26th St"
            />
            <td></td>
            <td></td>
            <td></td>
            <Event
              event="Comedy Cellar"
              color="show"
              location="117 MacDougal St"
            />
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12 pm</td>
            <Event
              event="WestvilleChelsea🍲"
              color="lunch"
              location="88 7th Ave"
            />
            <Event
              event="You Garden 🥟"
              color="lunch"
              location="41-07 Bell Blvd"
            />
            <Event event="John's 🥗" color="lunch" location="260 W 44th St" />
            <Event
              event="HaidilaoHotPot😋"
              color="lunch"
              location="138-23 39th Ave"
            />
            <Event
              event="MinettaTavern🥐"
              color="lunch"
              location=" 113 MacDougal St"
            />
            <Event event="Eataly 🦐" color="lunch" location="101 Liberty St" />
            <Event event=" Alta 🍲" color="lunch" location="64 W 10th St" />
          </tr>
          <tr>
            <td className="time">1 pm</td>
            <Event event="Museum 🖼️" color="museum" location="1000 5th Ave" />
            <td></td>
            <Event
              event="Empire Building"
              color="gray"
              location="20 W 34th St."
            />
            <td></td>
            <Event
              event="FlatironBuilding"
              color="gray"
              location="175 5th Ave"
            />
            <td></td>
            <Event event="Checkout🏨" color="yellow" location="152 W 26th St" />
          </tr>
          <tr>
            <td className="time">2 pm</td>
            <Event event="Museum 🏺" color="museum" location="1000 5th Ave" />
            <Event event="Wall Street" color="pink" location="Downtown NYC" />
            <td></td>
            <Event
              event="Little Market🛍️"
              color="shopping"
              location="505 Broome St"
            />
            <td></td>
            <Event event="Boutique H🤑" color="blue" location="35 W 32nd St" />
            <td></td>
          </tr>
          <tr>
            <td className="time">3 pm</td>
            <Event
              event="Public Library"
              color="library"
              location="476 5th Ave"
            />
            <td></td>
            <Event event="Oculus 🚇" color="blue" location="185 Greenwich St" />
            <Event
              event="The Shops 🛍️"
              color="shopping"
              location="435 Broadway"
            />
            <Event event="Herald Square" color="blue" location="New York, NY" />
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4 pm</td>
            <Event
              event="Bryant Park"
              color="park"
              location="New York, NY 10018"
            />
            <td></td>
            <td></td>
            <Event event="UNIQLO 🛍️" color="shopping" location="546 Broadway" />
            <Event event="Herald Square" color="blue" location="New York, NY" />
            <Event
              event="ice-skating⛸️"
              color="sport"
              location="45 Rockefeller Plaza"
            />
            <td></td>
          </tr>
          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <Event
              event="Sylvia's 🍝"
              color="diner"
              location="328 Malcolm X Blvd"
            />
            <Event event="Balthazar 🍗" color="diner" location="80 Spring St" />
            <td></td>
            <Event
              event="ShakeShack🍔"
              color="diner"
              location="1333 Broadway"
            />
            <Event event="Magnolia🍮" color="diner" location="1240 6th Ave" />
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
