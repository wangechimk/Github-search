import { Component, OnInit } from '@angular/core';
import { Profile } from '../../classes/profile';
import { ProfileService } from '../../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:Profile[]=[];
  // profiles:Profile;

  constructor(private profileservice:ProfileService) { }
  // findProfiles() {
  //   this.profileservice.fetchProfileApi().subscribe(
  //     (res) => {
  //       this.profile = res

  //     }, error => {
  //       console.error(error)
  //     }
  //   );
  // }


  // updateProf(id: any,profile:Profile) {
  //   this.profileservice.update(id,profile).subscribe((result) => {
  //     console.warn("result", result)
  //   })
  //   console.warn(id)
  // }

  ngOnInit(): void {
  }

}
