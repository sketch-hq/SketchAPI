interface IBITHockeyManagerDelegate {
  userIDForHockeyManager_componentManager(hockeyManager: BITHockeyManager, componentManager: BITHockeyBaseManager): NSString;
  userNameForHockeyManager_componentManager(hockeyManager: BITHockeyManager, componentManager: BITHockeyBaseManager): NSString;
  userEmailForHockeyManager_componentManager(hockeyManager: BITHockeyManager, componentManager: BITHockeyBaseManager): NSString;
}

