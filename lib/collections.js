Schema.Entity = new SimpleSchema({
  name: {
    type: String
  },
  address: {
    type: [String]
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  },
  contactInfo: {
    type: [Object]
  },
  "contactInfo.$.type": {
    type: String
  },
  "contactInfo.$.info": {
    type: String
  }
})
DB.Entities = new Mongo.Collection("entities")
DB.Entities.attachSchema(Schema.Entity)

Schema.Event = new SimpleSchema({
  personId: {
    type: String
  },
  date: {
    type: Date
  },
  tags: {
    type: [String]
  },
  note: {
    type: String
  }
})
DB.Events = new Mongo.Collection("events")
DB.Events.attachSchema(Schema.Event)
