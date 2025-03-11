   async function getStuData() {
      try {
        const response = await fetch('data.json');  // Fetch the file
        const data = await response.json();  // Parse JSON
        return data;
      } catch (err) {
        console.error('Error fetching data:', err);
        return [];  // Return an empty array on error
      }
    }

function filterDataDetails(details,value){
    let result=[];
    let name=details["Employee Names "].toLowerCase();
    let technology=details.Technology;
    let experiance=details.Experince;

    let filterName = name.indexOf(value);
    let filterTechnology=-1;
    let filterExperiance=-1;

    if(technology!=undefined){
        technology=technology.replace(/\r\n/g, ' ').trim()
        technology=technology.toLowerCase();
        console.log(technology);
        filterTechnology = technology.indexOf(value);
        console.log(filterTechnology);
    }
    if(experiance!=undefined){
      experiance=experiance.replace(/\r\n/g, ' ').trim()
      experiance=experiance.toLowerCase();
        filterExperiance = experiance.indexOf(value);
        console.log(filterExperiance);
    }

    if(filterName!=-1 || filterTechnology!=-1 || filterExperiance!=-1){
        result=details;
    }
    return result;

}

function createData(name,tech,exp){
    let studentContainer=document.createElement("div");

    let stuNameEl=document.createElement("p");
    stuNameEl.textContent=name;
    studentContainer.appendChild(stuNameEl);

    let techEl=document.createElement("p");
    techEl.textContent=tech;
    studentContainer.appendChild(techEl);

    let expEl=document.createElement("p");
    expEl.textContent=exp;
    studentContainer.appendChild(expEl);

    return studentContainer;


}

async function filterData() {
      let data = await getStuData();
      let updatedData=[];
        let searchInput=document.getElementById("searchInput").value.toLowerCase();
        let dataContainer=document.getElementById("dataContainer");
        dataContainer.innerHTML="";
        for (let details of data) {
        let newData=filterDataDetails(details,searchInput);
        if(newData.length!=0){
          updatedData.push(newData);
            
        }
        }
        for(let j of updatedData){
          let newEle=createData(j["Employee Names "],j.Technology,j.Experince);
          dataContainer.appendChild(newEle);

        }
  }
  filterData();
 