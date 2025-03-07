const jsonURL = "courses.json";

        fetch(jsonURL)
        .then(response => response.json())
        .then(data => {
            let tableBody = document.querySelector("#courses-table tbody");

            if (data.courses && Array.isArray(data.courses)) {
                data.courses.forEach(course => {
                    let row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${course.year_level}</td>
                        <td>${course.sem}</td>
                        <td>${course.code}</td>
                        <td>${course.description}</td>
                        <td>${course.credit}</td>
                    `;
                    tableBody.appendChild(row);
                });
            } else {
                console.error("Expected 'courses' array but got:", data);
            }
        })
        .catch(error => console.error("Error fetching JSON:", error));