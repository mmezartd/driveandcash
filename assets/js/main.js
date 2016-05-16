Waves.init();

var app = angular.module('driveLand', ['ngAnimate','duScroll','rzModule']);
var marca;
var factura;
var modelo;
var ano;
var tenencia;


app.controller('mainCtrl', function($scope, $document){
	$scope.menu = false;
	$scope.scroll1 = function(id){
		var offset = 60;
		var duration = 1000;
	    var someElement = angular.element(document.getElementById(id));
	    $document.scrollToElement(someElement, offset, duration);
	};
});

app.controller('formCtrl', function($scope, $document){
	$scope.slider = {
		value: 2007,
	    options: {
	    	floor: 2006,
	    	ceil: 2016,
	        showSelectionBar: true
	    }
	};
	$scope.showForm1 = true;
	$scope.showMe = false;
	$scope.modal1 = false;
	$scope.data ={
		marca: null,
		factura: null,
		tenencia: null
	};
	$scope.fvalid = true;
	$scope.tvalid = true;
	$scope.form1 = function(){
		marca = $scope.data.marca;
		factura = $scope.data.factura;
		modelo = $scope.modelo;
		ano = $scope.slider.value;
		tenencia = $scope.data.tenencia;
		
		if(marca!='' && marca!=undefined && marca!= null){
			$scope.mkvalid = true;
		}else{
			$scope.mkvalid = false;
		}
		if(modelo!='' && modelo!=undefined && modelo!=null){
			$scope.mdvalid = true;
		}else{
			$scope.mdvalid = false;
		}
		if(factura!='' && factura!=undefined && factura!=null){
			$scope.fvalid = true;
		}else{
			$scope.fvalid = false;
		}
		if(tenencia!='' && tenencia!=undefined && tenencia!=null){
			$scope.tvalid = true;
		}else{
			$scope.tvalid = false;
		}
		if($scope.mkvalid && $scope.mdvalid && $scope.fvalid && $scope.tvalid && factura === 'Si' && ano >= 2007){
			$scope.showForm1 = false;
			$scope.showMe = true;
			console.log(marca+' '+modelo+' '+ano+' '+factura+' '+tenencia);
		}else if($scope.mkvalid && $scope.mdvalid && $scope.fvalid && $scope.tvalid && factura === 'No' && ano < 2007 ){
			$scope.modal1 = true;
		}else if($scope.mkvalid && $scope.mdvalid && $scope.fvalid && $scope.tvalid && factura === 'No' && ano >= 2007){
			$scope.modal1 = true;
		}else if($scope.mkvalid && $scope.mdvalid && $scope.fvalid && $scope.tvalid && factura === 'Si' && ano < 2007){
			$scope.modal1 = true;
		}else{
			
		}
	};
	$scope.cModal1= function(){
		$scope.modal1 = false;
	};
	$scope.form2 = function(){
		
	};
});
