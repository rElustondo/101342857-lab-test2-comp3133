export class Mission {
    mission_name: string;
    launch_year: string;
    details: string;
    links: {
      mission_patch_small: string;
    };
    launch_site: {
        site_name_long: string;
      };
    rocket: {
        rocket_name: string;
        rocket_type: string;
    };
    constructor(mission_name: string, launch_year: string, details: string, links: { mission_patch_small: string }, rocket: { rocket_name: string, rocket_type: string }, launchSite: { site_name_long: string }) {
      this.mission_name = mission_name;
      this.launch_year = launch_year;
      this.details = details;
      this.links = links;
      this.launch_site = launchSite;
      this.rocket = rocket;
    }
  }
  