$(document)
  .ready(function() {

    var message_no;
    var count = 0;
    var howManyTimes = 1;
    var $messages = $('.messages-content'),
        d, h, m,
        i = 0;

    var incoming = [
// 1
      'Hi there, I\'m Fabio and you?',
// 2
      'Nice to meet you',
// 3
      'Anyway I\'ve gotta go now',
// 4
      'Not too bad, thanks',
// 5
      'What do you do?',
// 6
      'That\'s awesome',
// 7
      'Codepen is a nice place to stay',
// 8
      'I think you\'re a nice person',
// 9
      'Why do you think that?',
// 10
      'Can you explain?',
// 11
      'Anyway I\'ve gotta go now',
// 12
      'It was a pleasure chat with you',
// 13
      'Time to make a new codepen',
// 14
      'Bye',
// 15
      ':)'
    ]

    var outgoing = [
// 1
      'im mike',
// 2
      'you too',
// 3
      'It was a pleasure chat with you',
// 4
      'Not too bad, thanks',
// 5
      'What do you do?',
// 6
      'That\'s awesome',
// 7
      'Codepen is a nice place to stay',
// 8
      'I think you\'re a nice person',
// 9
      'Why do you think that?',
// 10
      'Can you explain?',
// 11
      'Anyway I\'ve gotta go now',
// 12
      'It was a pleasure chat with you',
// 13
      'Time to make a new codepen',
// 14
      'Bye',
// 15
      ':)'
    ]


    $(window).load(function() {
      $messages.mCustomScrollbar();
        setTimeout(function() {
        $(".page1 .message").addClass("visible");
      }, 500 + (Math.random() * 20) * 100);
    });

    function updateScrollbar() {
      $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
      });
    }

    function setDate(){
      d = new Date()
      if (m != d.getMinutes()) {
        m = d.getMinutes();
        $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
      }
    }

    // $('.message-submit').click(function() {
    //   insertMessage();
    // });

    $(window).on('keydown', function(e) {
      if (e.which == 13) {
        insertMessage();
        return false;
      }
    })

    function page1(){
      $(".page1 .message").click(function() {
        $(".page1").addClass("hide");
        $(".page2").removeClass("hide");
        $(".mobile").addClass("move_left");
        setTimeout(function() {
          $(".content").removeClass("hide");
          howManyTimes = 0;
        fakeMessage(howManyTimes);
        }, 1000);
        // fakeMessage(i);
          // insertMessage(0);
      });
    }
    page1();

    function page2(){
      $(".next_slide1").click(function() {
        $(".slide1").addClass("hide");
        $(".slide2").removeClass("hide");
        howManyTimes = 1;
        fakeMessage(howManyTimes);
        // $(".mobile").addClass("move_left");
        // setTimeout(function() {
        //   $(".content").removeClass("hide");
        // }, 1000);
        // fakeMessage(i);
          // insertMessage(0);
      });
    }
    page2();

    function page3(){
      $(".next_slide2").click(function() {
        $(".slide2").addClass("hide");
        $(".slide3").removeClass("hide");
        howManyTimes = 2;
        fakeMessage(howManyTimes);
        // $(".mobile").addClass("move_left");
        // setTimeout(function() {
        //   $(".content").removeClass("hide");
        // }, 1000);
        // fakeMessage(i);
          // insertMessage(0);
      });
    }
    page3();
    

    function pagecounter(count, howManyTimes){
      console.log("vdvfn");
      count = count + 1;
      console.log(count);
      if (count < howManyTimes) {
        setTimeout(function() {
          fakeMessage(count);
        }, 200 + (Math.random() * 20) * 100);
        
      }
      
              
    }
    // pagecounter();


    function fakeMessage(count) {
      
      $('<div class="message loading new"><figure class="avatar"><img src="images/profile-80_4.jpg" /></figure><span></span></div>').appendTo($('.mCSB_container'));
      updateScrollbar();

      setTimeout(function() {
        $('.message.loading').remove();
        $('<div class="message new"><figure class="avatar"><img src="images/profile-80_4.jpg" /></figure>' + incoming[count] + '</div>').appendTo($('.mCSB_container')).addClass('new');
        setDate();
        updateScrollbar();
        insertMessage(count);
        // i++;
      }, 500 + (Math.random() * 20) * 100);

    }

    function insertMessage(count) {
      // if ($('.message-input').val() != '') {
      //   return false;
      // }
      $('<div class="message loading new message-personal"><figure class="avatar"></figure><span></span></div>').appendTo($('.mCSB_container'));
      updateScrollbar();

      setTimeout(function() {
        $('.message.loading').remove();
        $('<div class="message message-personal"><figure class="avatar"></figure>' + outgoing[count] + '</div>').appendTo($('.mCSB_container')).addClass('new');
        setDate();
        updateScrollbar();
        //console.log(count);
        pagecounter(count, howManyTimes);
        // i++;
      }, 500 + (Math.random() * 20) * 100);

    }

    // function insertMessage(count) {

    //   $('<div class="message message-personal">' + outgoing[count] + '</div>').appendTo($('.mCSB_container')).addClass('new');
    //   setDate();
    //   updateScrollbar();
    // }

});