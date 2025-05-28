import Model, { attr } from '@ember-data/model';

export default class PartModel extends Model {
  @attr type;
  @attr imagePath;
  @attr assignedTo;
  @attr details;
}
