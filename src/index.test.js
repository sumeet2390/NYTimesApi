import * as React from "react";
import { shallow } from "enzyme";
import { SearchComponent } from "./js/components/SearchComponent";

const SearchProps = {
  newsSelecteddata: [],
  newsList: [
    {
      url:
        "https://www.nytimes.com/interactive/2019/06/12/travel/traveling-europe-summer-crowds.html",
      adx_keywords:
        "Travel and Vacations;Tinos (Greece);Delft (Netherlands);Hague (Netherlands);Valencia (Spain);Kotor (Montenegro);Olomouc (Czech Republic);Lucca (Italy);Europe",
      subsection: "",
      email_count: 1,
      count_type: "EMAILED",
      column: "",
      eta_id: 0,
      section: "Travel",
      id: 100000006547150,
      asset_id: 100000006547150,
      nytdsection: "travel",
      byline: "",
      type: "Interactive",
      title: "6 Places in Europe Offering Shelter From the Crowds",
      abstract:
        "Daytrippers, cruise ships, home-sharing, cheap airlines: They all contribute to tourism saturation in European hotspots. But there are quieter alternatives, if you know where to look.",
      published_date: "2019-06-12",
      source: "The New York Times",
      updated: "2019-06-16 07:35:15",
      des_facet: ["TRAVEL AND VACATIONS"],
      org_facet: "",
      per_facet: "",
      geo_facet: [
        "TINOS (GREECE)",
        "DELFT (NETHERLANDS)",
        "HAGUE (NETHERLANDS)",
        "VALENCIA (SPAIN)",
        "KOTOR (MONTENEGRO)",
        "OLOMOUC (CZECH REPUBLIC)",
        "LUCCA (ITALY)",
        "EUROPE"
      ],
      media: [
        {
          type: "image",
          subtype: "photo",
          caption: "Valencia, Spain.",
          copyright: "Emilio Parra Doiztua for The New York Times",
          approved_for_syndication: 1,
          "media-metadata": [
            {
              url:
                "https://static01.nyt.com/images/2019/06/16/travel/13europe-valencia/13europe-valencia-thumbStandard-v2.jpg",
              format: "Standard Thumbnail",
              height: 75,
              width: 75
            },
            {
              url:
                "https://static01.nyt.com/images/2019/06/16/travel/13europe-valencia/13europe-valencia-mediumThreeByTwo210-v2.jpg",
              format: "mediumThreeByTwo210",
              height: 140,
              width: 210
            },
            {
              url:
                "https://static01.nyt.com/images/2019/06/16/travel/13europe-valencia/13europe-valencia-mediumThreeByTwo440-v2.jpg",
              format: "mediumThreeByTwo440",
              height: 293,
              width: 440
            }
          ]
        }
      ],
      uri: "nyt://interactive/b6a694f1-3666-51dd-a208-261b21ab2276"
    }
  ]
};
describe("<SearchComponent />", () => {
  it("check if SearchComponent rendered", () => {
    const wrapper = shallow(<SearchComponent {...SearchProps} />);
    console.log(wrapper);
    expect(wrapper.find("SearchComponent")).toBeDefined();
  });
  it("check if handleChange called", () => {
    const wrapper = shallow(<SearchComponent {...SearchProps} />);
    wrapper.setState = jest.fn();
    wrapper.instance().handleChange({ target: { value: "Eu" } });
    expect(wrapper.setState).toHaveBeenCalled();
  });
  it("check if componentWillReceiveProps called", () => {
    const wrapper = shallow(<SearchComponent {...SearchProps} />);
    wrapper.setState = jest.fn();
    wrapper.setProps({ newsList: [] });
    wrapper.instance().handleChange({ target: { value: "" } });
    expect(wrapper.setState).toHaveBeenCalled();
  });
});
