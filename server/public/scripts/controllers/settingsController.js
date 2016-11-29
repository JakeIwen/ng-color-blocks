colorBlocks.controller('SettingsController', ['$scope', 'DataFactory', function($scope, DataFactory) {
  console.log("settings controller running");
  var self = this;
  self.newColor = '';
  self.oldColor = '';
  self.availableColors = [];
  self.currentColors = DataFactory.colors;
  getAvailableColors();

  function getAvailableColors() {
    self.availableColors = allColorNames;
    DataFactory.colors.forEach(function(existingColor) {
      var removalIndex = self.availableColors.indexOf(existingColor);
      self.availableColors.splice(removalIndex, 1);
    })
  };

  self.addNewColor = function(newColor) {
    DataFactory.colors.push(self.newColor.color);
    getAvailableColors();
    console.log('New colorset from Factory: ', DataFactory.colors);
  }

  self.removeOldColor = function(oldColor) {
    var removalIndex = DataFactory.colors.indexOf(oldColor);
    console.log('removal index:', removalIndex);
    DataFactory.colors.splice(removalIndex, 1);
    getAvailableColors();
    console.log('New colorset from Factory: ', DataFactory.colors);
  }



}]);


const allColorNames = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];
