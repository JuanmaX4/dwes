const { Schema, model } = require('mongoose')

const mongoosePaginado = require('mongoose-paginate-v2');

const productoSchema = new Schema({ 
    "st": {
        "type": "String"
    },
    "ts": {
        "$date": {
            "type": "Date"
        }
    },
    "position": {
        "type": {
            "type": "String"
        },
        "coordinates": {
            "type": [
                "Number"
            ]
        }
    },
    "elevation": {
        "type": "Number"
    },
    "callLetters": {
        "type": "String"
    },
    "qualityControlProcess": {
        "type": "String"
    },
    "dataSource": {
        "type": "String"
    },
    "type": {
        "type": "String"
    },
    "airTemperature": {
        "value": {
            "type": "Number"
        },
        "quality": {
            "type": "String"
        }
    },
    "dewPoint": {
        "value": {
            "type": "Number"
        },
        "quality": {
            "type": "String"
        }
    },
    "pressure": {
        "value": {
            "type": "Number"
        },
        "quality": {
            "type": "String"
        }
    },
    "wind": {
        "direction": {
            "angle": {
                "type": "Number"
            },
            "quality": {
                "type": "String"
            }
        },
        "type": {
            "type": "String"
        },
        "speed": {
            "rate": {
                "type": "Number"
            },
            "quality": {
                "type": "String"
            }
        }
    },
    "visibility": {
        "distance": {
            "value": {
                "type": "Number"
            },
            "quality": {
                "type": "String"
            }
        },
        "variability": {
            "value": {
                "type": "String"
            },
            "quality": {
                "type": "String"
            }
        }
    },
    "skyCondition": {
        "ceilingHeight": {
            "value": {
                "type": "Number"
            },
            "quality": {
                "type": "String"
            },
            "determination": {
                "type": "String"
            }
        },
        "cavok": {
            "type": "String"
        }
    },
    "sections": {
        "type": [
            "String"
        ]
    },
    "precipitationEstimatedObservation": {
        "discrepancy": {
            "type": "String"
        },
        "estimatedWaterDepth": {
            "type": "Number"
        }
    }
});

productoSchema.plugin(mongoosePaginado);

module.exports = model('Producto', productoSchema);