import mongoose from 'mongoose';

const { Schema } = mongoose;

mongoose.Promise = global.Promise;

const dummydata = new Schema({
    corridor:{
        from:{
            type: String
        },
        to:{
            type: String
        },
        amount:{
            type: Number
        },
        firm:{
            type: String
        },
        product:{
            type: String
        },
        fee:{
            type: Number
        },
        exchangeRateMargin:{
            type:Number
        },
        totalCostPct:{
            type: Number
        },
        totalCost:{
            type: Number
        },
        amountReceived:{
            type:Number
        },
        transferSpeed:{
            type: Number
        },
        networkCoverage:{
            type: String
        }
    }
})