import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { JournalPage } from '../journal/journal';
import { AppsPage } from '../apps/apps';
import { FocusPage } from '../focus/focus';
import { SleepPage } from '../sleep/sleep';
import { DreamPage } from '../dream/dream';
import { RelaxPage } from '../relax/relax';
import { SettingsPage } from '../settings/settings';
import { AnimationExamplesPage } from '../animation-examples/animation-examples';
// import { ReadyToDreamPage } from '../ready-to-dream/ready-to-dream';
import { ReadyToDream2Page } from '../ready-to-dream2/ready-to-dream2';
import { ReadyToDream3Page } from '../ready-to-dream3/ready-to-dream3';

@Component({
  selector: 'page-ready-to-dream',
  templateUrl: 'ready-to-dream.html'
})
export class ReadyToDreamPage {

  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToJournal(params){
    if (!params) params = {};
    this.navCtrl.push(JournalPage);
  }goToApps(params){
    if (!params) params = {};
    this.navCtrl.push(AppsPage);
  }goToFocus(params){
    if (!params) params = {};
    this.navCtrl.push(FocusPage);
  }goToSleep(params){
    if (!params) params = {};
    this.navCtrl.push(SleepPage);
  }goToDream(params){
    if (!params) params = {};
    this.navCtrl.push(DreamPage);
  }goToRelax(params){
    if (!params) params = {};
    this.navCtrl.push(RelaxPage);
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.push(SettingsPage);
  }goToAnimationExamples(params){
    if (!params) params = {};
    this.navCtrl.push(AnimationExamplesPage);
  }goToReadyToDream(params){
    if (!params) params = {};
    this.navCtrl.push(ReadyToDreamPage);
  }goToReadyToDream2(params){
    if (!params) params = {};
    this.navCtrl.push(ReadyToDream2Page);
  }goToReadyToDream3(params){
    if (!params) params = {};
    this.navCtrl.push(ReadyToDream3Page);
  }
}
