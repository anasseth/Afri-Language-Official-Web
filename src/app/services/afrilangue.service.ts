import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { HTTP } from "@ionic-native/http/ngx";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";

@Injectable({
  providedIn: "root",
})
export class AfrilangueService {
  url: string;

  language_id: number;

  tok: string =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjNmZjRjMGM4Y2NkMGM3MWI0NjkzMDZmNTExZWNlNDEyZTQ4Mjc3MjFiNjlhNDE3NGU4ZWIxNTI0MTM1NGIyYmFiMWVjNmQ0NzUyMjRiOGEyIn0.eyJhdWQiOiIzIiwianRpIjoiM2ZmNGMwYzhjY2QwYzcxYjQ2OTMwNmY1MTFlY2U0MTJlNDgyNzcyMWI2OWE0MTc0ZThlYjE1MjQxMzU0YjJiYWIxZWM2ZDQ3NTIyNGI4YTIiLCJpYXQiOjE1NjkzMjYyOTMsIm5iZiI6MTU2OTMyNjI5MywiZXhwIjoxNjAwOTQ4NjkzLCJzdWIiOiI4MyIsInNjb3BlcyI6W119.PHxAQ5ztf8QrqjdQriD41S7ZM8lKaI9xqWQoaV9EmeoST8OwNlfMnBvcD9P_U6wnhwOxRW_eL2bHsOUMPNK4EJV_J80gF1V7Bs65WTwHehspuRkEbQaBtoe7XRp7k1NreR49an4xBJ2IhJArcFJOSoDuLYyAoRWXokWLoB_YI_tRjddNwJXvXzYGhtxokygtxTysLWbjHvZUJz28p-JZVVFUZ0o_Qae6Yc23ZGWK09rrbBAC2qNGqLTD8gKPIRLHvW7mHik3k-1LMPaLZeQ8UOuG136KcYPZJjGP0s3AhjSem3vJIAWvf2fheir7OzYOiH8gUW2tuljrc4GNyZMSIv7FVhxilV7Ip9TN-ebsSr2UxJkeC3KsVRxKTmCvKR5HGToQzLKVHODFJ12lHwtxD7VvMFxTBz-ITLbyaOSzKdhCBJJZd1uHSrHEix9CTsUiTrKeGFy3wA0tT9QjW-Gzjz0DyvAfOcqTS0_nfAX7YEah0euBL-eeWP-LKsTRJHl7vE-M3pNb3dbsklrO8XIdCcVpy-AoWuO8h2okwE7kZ2P1tST7goEjxfg5veO6goNm1oS3EA8z6H8fyx0vaTa6IJJBuXNiTAIT0e4x300ZqvICoh7413PssbBqdEeMNU7g4zFwMjK83WW3c6XCDtqknoQdtag631j9RbXjyx8K95g";
  authentification: boolean = false;
  myToken: string = "";
  helpShow;

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.myToken,
    }),
  };

  data = "appel";

  constructor(
    private httpClient: HTTP,
    private http: HttpClient,
    private router: Router,
    private localNotifications: LocalNotifications
  ) {
    this.url = "";
    this.showNotification();
  }

  notification = true;

  showNotification() {
    console.log("notification");

    if (this.notification == true) {
      this.localNotifications.schedule({
        text: "C'est l'heure d'apprendre ",
        // trigger: { at: new Date(new Date().getTime() + 15000) },
        trigger: { every: { hour: 11, minute: 30 } },
        led: "FF0000",
        foreground: true,
      });
    }
  }

  showHelp() {
    this.helpShow = true;
    localStorage.setItem("help", this.helpShow);
  }

  loadHelp() {
    this.helpShow = localStorage.getItem("help");
    let etats;
    if (this.helpShow == null) {
      etats = "/tabs/tabs/help";
      console.log(etats);
      return etats;
    } else {
      etats = "/tabs/tabs/cours";
      console.log(etats);
      return etats;
    }
  }

  saveToken() {
    localStorage.setItem("myToken", this.myToken);

    console.log(this.myToken);
  }

  loadToken() {
    this.myToken = localStorage.getItem("myToken");
    if (this.myToken) {
      this.authentification = true;
      return true;
    } else {
      this.authentification = false;
      return this.authentification;
    }
  }

  clearToken() {
    localStorage.removeItem("myToken");
    this.authentification = false;
    this.router.navigateByUrl("login");
  }

  public login(email, password) {
    return this.http.post("https://afrilangues.com/api/login", {
      email: email,
      password: password,
    });
  }

  public forgotPassword(email) {
    return this.http.post("https://www.afrilangues.com/api/resetpassword", {
      email: email
    });
  }

  public changePassword(passObject) {
    return this.http.post("https://www.afrilangues.com/api/change_password",
      passObject
    );
  }
  public getLanguageData() {
    return this.http.post("https://www.afrilangues.com/api/languages",
      null
    );
  }

  public getProfile() {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    console.log("header => ", httpOptions.headers);

    return this.http.post(
      "https://afrilangues.com/api/profile",
      null,
      httpOptions
    );
  }
  public getTransaction(wari, langue, month) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    console.log("header => ", httpOptions.headers);

    return this.http.post(
      "https://afrilangues.com/api/payment_transaction",
      { wpayId: wari, language_id: langue, months: month },
      httpOptions
    );
  }
  public getPayment() {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    console.log("header => ", httpOptions.headers);

    return this.http.get("https://afrilangues.com/api/pricings");
  }

  public getSubscribes() {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    console.log("header => ", httpOptions.headers);

    return this.http.post(
      "https://afrilangues.com/api/subscriptions",
      null,
      httpOptions
    );
  }
  public getCancelSubscribe(language) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    console.log("header => ", httpOptions.headers);

    return this.http.post(
      "https://afrilangues.com/api/cancle_subscription",
      { id: language },
      httpOptions
    );
  }
  public getSubscribeParticular(language) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    console.log("header => ", httpOptions.headers);

    return this.http.post(
      "https://afrilangues.com/api/subscription_lang",
      { language_id: language },
      httpOptions
    );
  }

  public getCheck(
    question_idM,
    content_typeM,
    question_typeM,
    lession_idM,
    answerM
  ) {
    console.log(
      question_idM,
      content_typeM,
      question_typeM,
      lession_idM,
      answerM
    );

    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    console.log("header => ", httpOptions.headers);

    return this.http.post(
      "https://afrilangues.com/api/check_question",
      {
        question_id: question_idM,
        content_type: content_typeM,
        question_type: question_typeM,
        lession_id: lession_idM,
        answer: answerM,
      },
      httpOptions
    );
  }

  public getRegister(user, language) {
    /*   let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken
      })
    };
 */

    return this.http.post("https://afrilangues.com/api/register", {
      name: user.nompre,
      email: user.email,
      location: user.adresse,
      phone_number: user.telephone,
      password: user.password,
      language_id: language,
    });
  }

  public getEditUser(user) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };

    return this.http.post(
      "https://afrilangues.com/api/edit_profile",
      {
        name: user.nompre,
        email: user.email,
        location: user.adresse,
        phone_number: user.telephone,
      },
      httpOptions
    );
  }

  public getLangues() {
    return this.http.post("https://afrilangues.com/api/languages", null);
  }

  public getHtml(url) {
    return this.http.get("https://afrilangues.com/api/" + url);
  }

  public getThematics(language_id) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };

    return this.http.post(
      "https://afrilangues.com/api/thematic_topics",
      { langauge_id: language_id },
      httpOptions
    );
  }

  public getVerify(id) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };

    return this.http.post(
      "https://afrilangues.com/api/language_payment",
      { language_id: id },
      httpOptions
    );
  }

  getThematic(id: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };

    return this.http.post(
      "https://afrilangues.com/api/thematics",
      { topic_id: id },
      httpOptions
    );
  }

  getSubThematic(id: any) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };

    return this.http.post(
      "https://afrilangues.com/api/subthematics",
      { subtopic_id: id },
      httpOptions
    );
  }

  public getTopics(language_id) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };

    return this.http.post(
      "https://afrilangues.com/api/topics",
      { language_id: language_id },
      httpOptions
    );
  }

  public getTLessons(topic_id) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    return this.http.post(
      "https://afrilangues.com/api/lessons",
      { topic_id: topic_id },
      httpOptions
    );
  }

  public getQuestion(lesson_id, question_type) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    return this.http.post(
      "https://afrilangues.com/api/questions",
      { lession_id: lesson_id, question_type: question_type },
      httpOptions
    );
  }

  getUser(id) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    return this.http.post(
      "https://afrilangues.com/api/user_detail",
      { user_id: id },
      httpOptions
    );
  }
  getForum(id) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    return this.http.post(
      "https://afrilangues.com/api/community_list",
      { language_id: id },
      httpOptions
    );
  }
  postComment(id, comment) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    return this.http.post(
      "https://afrilangues.com/api/community_add_comment",
      { community_id: id, comments: comment },
      httpOptions
    );
  }
  getCommunity(id, langauge) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    return this.http.post(
      "https://afrilangues.com/api/community",
      { community_id: id, language_id: langauge },
      httpOptions
    );
  }
  getCommunityComments(id) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    return this.http.post(
      "https://afrilangues.com/api/community_comments",
      { community_id: id },
      httpOptions
    );
  }

  public getStatistics() {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };

    return this.http.post(
      "https://afrilangues.com/api/statistics",
      null,
      httpOptions
    );
  }

  postForum(a, b, c, id) {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: "Bearer " + this.myToken,
      }),
    };
    return this.http.post(
      "https://afrilangues.com/api/community_create",
      { post_title: a, post_content: b, post_topic: c, language_id: id },
      httpOptions
    );
  }
}
