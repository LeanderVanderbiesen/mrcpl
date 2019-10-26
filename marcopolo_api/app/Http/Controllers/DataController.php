<?php

namespace App\Http\Controllers;

use Illuminate\Validation\Validator;
use App\location;

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

        //$coordinates = $request->all();
        $validator =$request->validate([
            'latitude' => 'required',
            'longitude' => 'required',
        ]);

        if (!$validator){
            return $this->sendError('Validation error', $validator);
        }

        if (isset($request->table_id)){
            $updated = DB::table('locations')->where('id', $request->table_id)->update(array('latitude' => $request->latitude, 'longitude' => $request->longitude, 'user_ip' => $request->getClientIp()));
            return $this->sendResponse($updated, "Location updated successfully");
        }
        else{
            $insertId = DB::table('locations')->insertGetId(array('latitude' => $request->latitude, 'longitude' => $request->longitude, 'user_ip' => $request->getClientIp()));
            return $this->sendResponse($insertId, 'Location stored successfully');
        }

    }

   /* public function update(Request $request, location $location){
        $coordinates = $request->all();

        $validator =$request->validate([
            'latitude' => 'required',
            'longitude' => 'required',
        ]);

        if (!$validator){
            return $this->sendError('Validation error', $validator);
        }
        $location->latitude = $coordinates['latitude'];
        $location->longitude = $coordinates['longitude'];
        $location->ip_adres = $coordinates['ip_adres'];

        $location->save();
        return $this->sendResponse($location->toArray(), "Location updated successfully");
    }*/
}
