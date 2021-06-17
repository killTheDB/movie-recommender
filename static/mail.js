function sendEmail(receiver,title) {
  console.log(title);
    Email.send({
      Host: "smtp.gmail.com",
      Username: "vegitolstark1234@gmail.com",
      Password: "vklcjwaayvewjpcb",
      To: receiver,
      From: "vegitolstark1234@gmail.com",
      Subject: "Your Movie Recommendations",
      Body: title,
    })
      .then(function (message) {
        alert("mail sent successfully")
      });
    
}

function mailclick(genre_id){
    var my_api_key = 'fc09ea6f58038cf03cfaac0555c7b099';
    var id = genre_id
    var receiver_email = document.getElementById("email").value
    $.ajax({
        type: 'GET',
        url:'https://api.themoviedb.org/3/discover/movie?api_key='+my_api_key+'&with_genres='+id,
    
        success: function(movie){
          if(movie.results.length<1){
            alert('Data err')
          }
          else{
            var final_list=""
            for (let index = 0; index < 15; ++index) {
              var movie_title = movie.results[index].original_title;    
              final_list += movie_title
              final_list += ","          
            }
            // var movie_id = movie.results[0].id;
            
            sendEmail(receiver_email,final_list);
          }
        },
        error: function(){
          alert('Err');
        },
      });
    
}
