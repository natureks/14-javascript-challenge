var tbody = d3.select("tbody");
var filter_button = document.querySelector("[class='btn btn-default']");
var filter_date = document.querySelector("[class='form-control']");
var dataTimeInput = document.getElementById("datetime");

// add a row to html table
function addRow(item){
    var row = tbody.append("tr").attr("class", "table-row");
    
    // loop through keys and values
    Object.entries(item).forEach(
        function ([key, value]) {
            // console.log(key, value);
            var td = row.append("td");
            // make value string text content of td
            td.text(value);
        }
    )
}

function showData(loadData) {
    console.log("# of records displayed = " + loadData.length);
    loadData.forEach(
        function (item) {
            addRow(item)
        }
    );
}
showData(data)

class UFOSighting {
    constructor(datetime, city, state, country, shape, durationMinutes, comments) {
      this.datetime = datetime;
      this.city = city;
      this.state = state;
      this.country = country;
      this.shape = shape;
      this.durationMinutes = durationMinutes;
      this.comments = comments;
    }
  }

  function clearTableMethodD3()
  {
    // d3.select("#ufo-table").selectAll("tr").remove();
    d3.selectAll(".table-row").remove();
  }
  
  function clearTableMethodDOM()
  {
      var otable=document.getElementById('ufo-table');
      while (otable.firstChild)
      {
        otable.removeChild(otable.firstChild);
      }
  }

  // event listeners
  filter_button.addEventListener("click", function (event) {
      clickFunc();
      event.preventDefault();
      // console.log(event);
  });

  function clickFunc() {
    if (filter_date.value === "")
    {
        console.log("No filter Date specified. Display all the records.");
        clearTableMethodD3();
        showData(data);
    } else {
        var filter_data = data.filter(function (item) { return item.datetime === filter_date.value });
        console.log("Filter Date specified is '" + filter_date.value + "'");
        clearTableMethodD3();
        showData(filter_data);
    }
  }

  // Execute a function when the user releases a key on the keyboard
  dataTimeInput.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      clickFunc();
    }
  });
  