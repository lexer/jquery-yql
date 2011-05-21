Jquery YQL query plugin

Example:

    $(function(){
      $.yqlQuery('select * from geo.places where text="Orlando"', function(response){
        console.log(response);
      })
    });
