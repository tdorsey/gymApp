/// <reference path="../typings/index.d.ts" />
/// <reference path="./services.ts" />

class DashCtrl {
  constructor() { }
}

class WeightsCtrl {
  public $inject = ['Weights'];
  weights: any[];
  constructor(
    public Weights: Services.IWeightsService
  ) {
    this.weights = Weights.all();
  }
  remove(weight) {
    this.Weights.remove(weight);
  };
}



interface IStateParams extends ng.ui.IStateParamsService {
  weightId: string;
  exerciseId: string;
}

class BaseCtrl {
  public $inject = ['Settings'];
  settings: Services.IUserSettings;
  constructor(public readonly Settings: Services.IUserSettings) {
    this.settings = Settings;
  }
}

class ExercisesCtrl extends BaseCtrl {

  static $inject = ["$scope", "Settings"];

  exercises: Array<Services.IExercise>;
  constructor($scope: ng.IScope, public Exercises: Services.Exercise, public Settings: Services.IUserSettings) {
    super(Settings);
    this.exercises = Exercises.all();
    this.settings = Settings;

  }
  remove(exercise) {
    this.Exercises.remove(exercise);
  };
}

class WeightDetailCtrl {
  public $inject = ['Weights', '$stateParams'];
  weight: Object;
  constructor(
    public Weights: Services.IWeightsService,
    public $stateParams: IStateParams
  ) {
    this.weight = Weights.get($stateParams.weightId);
  }
}

class ExerciseDetailCtrl {
  public $inject = ['Exercises', '$stateParams'];
  exercise: Object;
  constructor(
    public Exercises: Services.IExerciseService,
    public $stateParams: IStateParams
  ) {
    this.exercise = Exercises.get($stateParams.exerciseId);
  }
}

class SettingsCtrl {
  settings: Object;
  constructor(public Settings: Services.IUserSettings) {
    this.settings = Settings;
  }
}

var fn = new function () { };


angular.module('starter.controllers', [])
  .controller('DashCtrl', DashCtrl)
  .controller('WeightsCtrl', WeightsCtrl)
  .controller('WeightDetailCtrl', WeightDetailCtrl)
  .controller('ExercisesCtrl', ['$scope', 'Settings', function($scope, Settings) {}])
  .controller('ExerciseDetailCtrl', ExerciseDetailCtrl)
  .controller('SettingsCtrl', SettingsCtrl);
