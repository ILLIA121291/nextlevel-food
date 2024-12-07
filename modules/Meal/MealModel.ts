import { Schema, model, models } from 'mongoose';

const mealShema = new Schema({
  creator: {
    type: String,
    required: true,
  },

  creator_email: {
    type: String,
    required: true,
  },

  slug: {
    type: String,
    require: true,
  },

  title: {
    type: String,
    required: true,
  },

  summary: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },

  instructions: {
    type: String,
    required: true,
  },
});

// demo_projects - название базы данных;
// nextlevelfoods - название коллекции;

const MealModel = models.nextlevelfood || model('nextlevelfood', mealShema);

export default MealModel;
