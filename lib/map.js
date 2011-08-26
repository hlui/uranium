/* Map *
 * * * *
 * The map creates a fully functional google map (API version 3) from addresses.
 * 
 * It (will) also support current location / custom icons and callbacks / getting directions.
 *
 */

Ur.QuickLoaders['map'] = (function(){

  // -- Private functions --

  function ThresholdCallback(threshold, callback) {
    this.threshold = threshold;
    this.count = 0;
    this.callbacks = [];
    if (callback !== undefined) {
      this.callbacks.push(callback);
    }
  }
  
  ThresholdCallback.prototype.finish = function() {
    this.count += 1;
    if (this.count == this.threshold) {
      var callback = this.callbacks.pop();
      while(callback) {
        callback();
        callback = this.callbacks.pop();
      }
    }
  }

  function getUserLocation(success, failure) {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, failure);
    } else {
      console.error("Ur : Geolocation services not available");
    } 
  }


  // -- End of Private functions -- 



  function Map(data){
    this.elements = data;
    this.fetch_map(); //This is async -- it calls initialize when done
  }

  // NOTE : All this map stuff is async. The execution path goes:
  // 
  // fetch_map() -> 
  // fetch_coordinates() -> 
  // setup_map() -> 
  //     add_coordinates()
  //     setup_user_location()

  Map.prototype = {
    fetch_coordinates: function(){
      this.coordinates = [];
      this.center = [0,0];
      var geocoder = new google.maps.Geocoder();
      var obj = this;
      var final_callback = new ThresholdCallback(
        this.elements["addresses"].length,
        function(obj){return function(){obj.setup_map();}}(this)
      );

      x$(this.elements["addresses"]).each(
        function(address, index) {
          address = address.innerText;
          geocoder.geocode(
            {"address": address},
            function(results, status) {
              var position = results[0].geometry.location;

              if(status === google.maps.GeocoderStatus.OK) {
                obj.coordinates[index] = position;
                obj.center[0] += position.lat();
                obj.center[1] += position.lng();

                final_callback.finish();
              } else {
                console.error("Error geocoding address: " + address);
              }

            }
          );
        }
      );

    },

    add_coordinates: function() {
      var obj = this;

      x$().iterate(
        obj.coordinates,
        function (point, index) {
          var marker = new google.maps.Marker({
            position: point, 
            map: obj.map
          }); 
        }
      );
      
    },

    setup_user_location: function() {
      var user_location = this.elements["user_location"];
      console.log("user loc", user_location);

      if(user_location === undefined) {
        return
      }

      // Add a listener on the button 

      x$(user_location).on(
        'click',
        function(){console.log("hey");this.fetch_user_location()}
      );

      // Now just determine if I should use it automatically or not

      if(x$(user_location).attr("data-ur-state")[0] === "enabled") {
        console.log("UL enabled ...");
        this.fetch_user_location();
      } 

      
    },

    fetch_user_location: function() {
      console.log("fetching user location");

      getUserLocation(
        function(obj){return function(position){obj.add_user_location(position);}}(this),
        function(){
          console.error("Ur : Error getting user location");
        }
      );
    },

    add_user_location: function(point) {
      console.log("adding user loc to map", point);
      
      var google_point = new google.maps.LatLng(point.coords.latitude, point.coords.longitude);

      var marker = new google.maps.Marker({
        position: google_point, 
        map: this.map,
        icon: "http://dl.dropbox.com/u/3940085/moovweb/Core/Ur/examples/images/bluedot.png"
      }); 
    },

    fetch_map: function() {
      var script = document.createElement("script");

      // Note:
      // - There can only be one map per page since I have to pass a global function name as
      //   the callback for the map code loading.
      // - The alternative is to generate unique global function names per instance ... but
      //   that requires eval() ... and "evals() are bad .... mkay?"

      // TODO: Can I at least hide it behind the Ur object?
      setup_uranium_map = function(obj){
        return function() {
          obj.fetch_coordinates();
        }
      }(this);

      script.src = "http://maps.googleapis.com/maps/api/js?sensor=true&callback=setup_uranium_map";

      this.elements["set"].appendChild(script);
    },

    setup_map: function() {
      
      this.center[0] /= this.elements["addresses"].length
      this.center[1] /= this.elements["addresses"].length

      var center = new google.maps.LatLng(this.center[0], this.center[1]);
      var options = {
        zoom: 13,
        center: center,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.elements["canvas"], options);

      this.add_coordinates();
      this.setup_user_location();
    }

  }


  var ComponentConstructors = {
    "address" : function(group, component, type) {
      if (group["addresses"] === undefined) {
        group["addresses"] = [];
      }

      group["addresses"].push(component);
    },

    "description" : function(group, component, type) {
      if (group["descriptions"] === undefined) {
        group["descriptions"] = [];
      }

      group["descriptions"].push(component);      
    }
  }

  function MapLoader(){
  }

  MapLoader.prototype.initialize = function(fragment) {
    var maps = x$(fragment).find_elements('map', ComponentConstructors);
    Ur.Widgets["map"] = {};

    for(var name in maps) {
      var map = maps[name];
      Ur.Widgets["map"][name] = new Map(map);
    }
  }

  return MapLoader;
})();