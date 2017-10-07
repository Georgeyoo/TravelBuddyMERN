$(document).ready(function() {
    $(".btn").on("click", function() {
        console.log("button clicked!");
    })
})


module.exports = {
    readLocations(): function {
        $(document).ready(function() {
            $(".result").click(function() {
                $.ajax({
                    type: 'GET',
                    url: 'mongodb://localhost/api/read',
                    dataType: 'jsonp',
                    }).done(function(data) {
                        var tbody = $('tbody');
                        tbody.html('');
                        data.locations.forEach(function(locations) {
                            tbody.append('<tr>\ 
                                            <td class="locationName">' + locations.name + '</td>\
                                            <td class="locationAddress">' + locations.address + '</td>\
                                         </tr>')
                        });
                    })
            })
        })    
    }
}