<?php

namespace App\Http\Controllers;

//use Illuminate\Validation\Validator;
use App\location;
use Dotenv\Validator;
use Illuminate\Http\Request;
use App\Http\Controllers\BaseController as BaseController;
use Illuminate\Support\Facades\DB;

class DataController extends BaseController
{
    public function getData(){
        $locations = location::all();

        return $this->sendResponse( $locations->toArray(), "Locations received successfully");
    }

    public function store(Request $request){
        $coordinates = $request->all();
        $validator = Validator::make($coordinates, [
            'latitude' => 'required|integer',
            'longitude' => 'required|integer',
            'user_ip' => 'unique',
        ]);

        if ($validator->fails()){
            return $this->sendError('Validation error', $validator->errors());
        }
         DB::table('locations')->insert(array('latitude' => $request->latitude, 'longitude' => $request->longitude, 'user_ip' => $request->getClientIp()));
        return $this->sendResponse($coordinates->toArray(), 'Location stored successfully');
    }

    public function update(Request $request, location $location){
        $coordinates = $request->all();

        $validator = Validator::make( $coordinates, [
            'latitude' => 'required|integer',
            'longitude' => 'required|integer',
            'user_ip' => 'unique',
        ]);

        if ($validator->fails()){
            return $this->sendError('Validation error', $validator->errors());
        }
        $location->latitude = $coordinates['latitude'];
        $location->longitude = $coordinates['longitude'];
        $location->ip_adres = $coordinates['ip_adres'];

        $location->save();
        return $this->sendResponse($location->toArray(), "Location updated successfully");
    }
}
