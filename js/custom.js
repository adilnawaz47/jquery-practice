// console.log(jQuery)

// $("button").click(function() {
//    console.log("button clicked"); 
// });

// jQuery("button").click(function() {
//    console.log("button clicked"); 
// });

// Jquery uses CSS syntax to select element and in addition, it has some own custom selectors.
// 1) Element Selector:
// Example: "p", "div","span", "button", "input"

// 2) Id selector:
// Example: "#p", "#adil"

// 3) class selector:
// ex <button class="myclass"> button </button>
// Ex: ".myclass"

// 3) Univershal selector:
// Ex : "*"


// $(document).ready(function () {
//     $("button").click(function () {
//         console.log("button clicked")
//     });    
// });

// $.noConflict();
// jQuery(document).ready(function () {
//     jQuery("button").click(function () {
//         console.log("button clicked")
//     });    
// });

// Element selector
// $(document).ready(function () {
//    $("p").click(function () {
//       alert("Element selector"); 
//    }); 
// });
// ID selector
// $(document).ready(function () {
//     $("#btn-id").click(function () {
//        alert("Id selector"); 
//     }); 
//  });

// class selector
// $(document).ready(function () {
//     $(".btn-class").click(function () {
//        alert("class selector"); 
//     }); 
//  });


// $(document).ready(function () {
    // Mouse Event
//     $("p").click(function () {
//        console.log("click event") 
//     });
    // Double click event
    // $("p").dblclick(function () {
    //     console.log("Double click event") 
    //  });
    // Mouse enter click event
    // $("p").mouseenter(function () {
    //     console.log("Mouse enter click event") 
    //  });
     // Mouse leave event
    //  $("p").mouseenter(function () {
    //     console.log("Mouse leave click event") 
    //  });
     // Keyboard event
    //  $("#name").keypress(function () {
    //     console.log("Key press") 
    //  });
     // Key down
    //  $("#name").keydown(function () {
    //     console.log("Key down") 
    //  });
     // Key up
    //  $("#name").keyup(function () {
    //     console.log("Key up") 
    //  });

     // Form event 
    // $("#fname").focus(function () {
    //     console.log("Focused field")

    // });
    //  // Blur event 
    // $("#fname").blur(function () {
    //     console.log("Blur field")
    // });
    // Form submit event
    // $("#frm-submit").submit(function (e) {
    //    console.log("form submit event");
    //    // e.preventDefault is used to stop refreshing page when form is submitted.
    //    e.preventDefault(); 
    // });


    // window resize enent
    // $(window).resize(function () {
    //     console.log("Window resized");
    // });
    // window reload enent
    // $(window).load(function () {
    //     alert("Window reload");
    // });
// });



$(document).ready(function () {
    // Hide Image
   $("#hide-img").click(function () {
       // here 1000 is given for time taken to hide and show image
      $("#img-id").hide(1000, function () {
         console.log("Image is hided"); 
      }); 
   }); 
   // Show Image
   $("#show-img").click(function () {
      $("#img-id").show(1000,function () {
         console.log("Image is Showed"); 
      }); 
   }); 
   // toggle Hide|Show Image
   $("#btn-toggle").click(function () {
      $("#img-id").toggle(1000,function () {
         console.log("Toggle for Image hide or show"); 
      }); 
   });
   
   // fade out
   $("#fade-out").click(function () {
      $("#img-id").fadeOut(1000,function () {
         console.log("Fade out"); 
      }); 
   }); 
   // fade in
   $("#fade-in").click(function () {
      $("#img-id").fadeIn(1000,function () {
         console.log("Fade In"); 
      }); 
   }); 
   // fade toggle
   $("#fade-toggle").click(function () {
      $("#img-id").fadeToggle(1000,function () {
         console.log("Fade Toggle"); 
      }); 
   }); 
   // fade To
   $("#fade-to").click(function () {
      $("#img-id").fadeTo(1000,0.5,function () {
         console.log("Fade To"); 
      }); 
   }); 

   // slide Up
   $("#slide-up").click(function () {
      $("#img-id").slideUp(1000, function () {
         console.log("Slide Up"); 
      }); 
   });
   // slide down
   $("#slide-down").click(function () {
      $("#img-id").slideDown(1000, function () {
         console.log("Slide Down"); 
      }); 
   });
   // slide Toggle
   $("#slide-toggle").click(function () {
      $("#img-id").slideToggle(1000, function () {
         console.log("Slide Toggle"); 
      }); 
   });

   // Animate Image
   $("#animate-id").click(function () {
       $("#pigeon-id").animate({left:"+=1"}, 100, function () {
          console.log("Animated Image") 
       });       
   });


   // Get the data
   let data = $("p").text();
   console.log(data);
   // Set the data
   $("#setdata").click(function () {
      $("p").text("Hey welcome to jquery course"); 
   });


      // Get Html data
      let htmldata = $("p").text();
      console.log(htmldata);
      // Set the data
      $("#htmldata").click(function () {
          let data = "<h4>Hey welcome to jquery course</h4>"
        $("p").html(data); 
      });

  // Input value using jquery
  let inputdata = $("#nametxt").val();
  console.log(inputdata)

  // get input txt using button
  $("#input").click(function () {
     let data1 = $("#nametxt").val();
     if (data1=="adil") {
         alert("This is adil khan")
     }else{
         alert("Adil is not there")
     };
  });


  // get attributes value
  let attributevalue = $("link").attr("href");
  console.log(attributevalue);
  // get attributes value
  let attributevalue1 = $("#nametxt").attr("data-sid");
  console.log(attributevalue1);

  // set attribute
  $("#setattribute").click(function () {
      let data2 = $("#nametxt").attr("data-sid","20");
      console.log(data2);
      console.log($("#nametxt").attr("data-sid"));
  });
});