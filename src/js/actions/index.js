import { DATA_LOADED, SELECTED_NEWS } from "../constants/action-types";

export function getData() {
  return function(dispatch) {
    return fetch(
      "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=VcCumUHnSRMbwzpbqNtdrMHXFqZdVIEe"
    )
      .then(response => response.json())
      .then(json => {
        dispatch({ type: DATA_LOADED, payload: json.results });
      });
  };
}

export function setSelectedNews(id) {
  return { type: SELECTED_NEWS, payload: id };
}
