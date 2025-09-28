import React, { useState, useEffect } from 'react'

function Calculator() {
    const [velocity, setVelocity] = useState(0);
    const [mass, setMass] = useState(0);
    const [force, setForce] = useState(0);
    const [acceleration, setAcceleration] = useState(0);
    const [distance, setDistance] = useState(0);
    const [time, setTime] = useState(0);

    // Calculate derived values
    const momentum = mass * velocity;
    const kineticEnergy = 0.5 * mass * velocity * velocity;
    const power = force * velocity;
    
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            
            
            {/* Live Values Display */}
            <div className=" p-2 rounded-lg mb-8">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Live Values</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className=" p-3 rounded">
                        <span className="text-sm text-gray-600">Velocity:</span>
                        <div className="text-lg   text-black">{velocity} m/s</div>
                    </div>
                    <div className="p-3 rounded">
                        <span className="text-sm text-gray-600">Mass:</span>
                        <div className="text-lg   text-black">{mass} kg</div>
                    </div>
                    <div className=" p-3 rounded">
                        <span className="text-sm text-gray-600">Force:</span>
                        <div className="text-lg   text-black">{force} N</div>
                    </div>
                    <div className=" p-3 rounded">
                        <span className="text-sm text-gray-600">Acceleration:</span>
                        <div className="text-lg  text-black ">{acceleration} m/s²</div>
                    </div>
                    <div className=" p-3 rounded">
                        <span className="text-sm text-gray-600">Distance:</span>
                        <div className="text-lg  text-black ">{distance} m</div>
                    </div>
                    <div className="p-3 rounded">
                        <span className="text-sm text-gray-600">Time:</span>
                        <div className="text-lg   text-black">{time} s</div>
                    </div>
                </div>
                
                {/* Calculated Values */}
                <div className="mt-4 pt-4 border-t ">
                    <h3 className="text-lg font-semibold mb-3 text-gray-700">Calculated Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className=" p-3 rounded">
                            <span className="text-sm text-gray-600">Momentum:</span>
                            <div className="text-lg  text-black">{momentum.toFixed(2)} kg⋅m/s</div>
                        </div>
                        <div className=" p-3 rounded">
                            <span className="text-sm text-gray-600">Kinetic Energy:</span>
                            <div className="text-lg  text-black-600">{kineticEnergy.toFixed(2)} J</div>
                        </div>
                        <div className=" p-3 rounded">
                            <span className="text-sm text-gray-600">Power:</span>
                            <div className="text-lg  text-black-600">{power.toFixed(2)} W</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Velocity (m/s)
                        </label>
                        <input 
                            type="number" 
                            value={velocity} 
                            onChange={(e) => setVelocity(Number(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                            placeholder="Enter velocity"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mass (kg)
                        </label>
                        <input 
                            type="number" 
                            value={mass} 
                            onChange={(e) => setMass(Number(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                            placeholder="Enter mass"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Force (N)
                        </label>
                        <input 
                            type="number" 
                            value={force} 
                            onChange={(e) => setForce(Number(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none "
                            placeholder="Enter force"
                        />
                    </div>
                </div>
                
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Acceleration (m/s²)
                        </label>
                        <input 
                            type="number" 
                            value={acceleration} 
                            onChange={(e) => setAcceleration(Number(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                            placeholder="Enter acceleration"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2 ">
                            Distance (m)
                        </label>
                        <input 
                            type="number" 
                            value={distance} 
                            onChange={(e) => setDistance(Number(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                            placeholder="Enter distance"
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Time (s)
                        </label>
                        <input 
                            type="number" 
                            value={time} 
                            onChange={(e) => setTime(Number(e.target.value) || 0)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                            placeholder="Enter time"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;