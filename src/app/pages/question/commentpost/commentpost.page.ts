import { Component, OnInit } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { AfrilangueService } from "src/app/services/afrilangue.service";

@Component({
  selector: "app-commentpost",
  templateUrl: "./commentpost.page.html",
  styleUrls: ["./commentpost.page.scss"],
})
export class CommentpostPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private afriService: AfrilangueService,
    private navParams: NavParams
  ) {
    this.post = this.navParams.get("post");
    this.getPertson();
    this.getCommunity();
  }

  ngOnInit() {
    // this.getCommunity();
    //this.getUser(2);
  }

  dismissModal() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
  post;
  community;
  user;
  datas;
  person;

  getPertson() {
    this.afriService
      .getCommunity(this.post.id, this.afriService.language_id)
      .subscribe(
        (data) => {
          this.user = data;

          console.log(data);
        },
        (error) => console.log(error)
      );
  }

  getCommunity() {
    /* this.afriService.getProfile().subscribe(
      (data) => {
        this.user = data["success"];

        console.log(this.user);
      },
      (error) => console.log(error)
    ); */

    this.afriService.getCommunityComments(this.post.id).subscribe(
      (data) => {
        this.datas = data;

        console.log(data);
      },
      (error) => console.log(error)
    );
  }
  comments;
  comment() {
    if (this.comments != undefined) {
      this.afriService
        .postComment(this.user.id, this.comments.trim())
        .subscribe((data) => {
          this.user = "";
          this.datas = "";
          this.comments = "";
          this.getPertson();
          this.getCommunity();
        });
    }
  }
}
