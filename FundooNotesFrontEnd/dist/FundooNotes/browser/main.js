(self["webpackChunkfundoo_notes"] = self["webpackChunkfundoo_notes"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 9844:
/*!***********************************************************!*\
  !*** ./src/app/Components/add-note/add-note.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddNoteComponent": () => (/* binding */ AddNoteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

function AddNoteComponent_mat_card_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddNoteComponent_mat_card_0_Template_mat_card_title_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.showNote(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-card-subtitle", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "check_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "brush");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "crop_original");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AddNoteComponent_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card-title", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "check_box");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-card-content", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-note-icons");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AddNoteComponent {
    constructor() {
        this.smallNote = true;
        this.bigNote = false;
    }
    ngOnInit() {
    }
    showNote() {
        this.smallNote = false;
        this.bigNote = true;
    }
}
AddNoteComponent.ɵfac = function AddNoteComponent_Factory(t) { return new (t || AddNoteComponent)(); };
AddNoteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AddNoteComponent, selectors: [["app-add-note"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "bigCard", 4, "ngIf"], [1, "small-card-title", 3, "click"], ["type", "text", "placeholder", "Take a Note..."], [1, "icons"], ["mat-list-icon", "", 1, "material-icons-outlined"], [1, "bigCard"], [1, "big-card-title"], ["cdkTextareaAutosize", "", "placeholder", "Title", 1, "textarea"], [1, "big-card-content"], ["cdkTextareaAutosize", "", "placeholder", "Take a Note...", 1, "textarea"]], template: function AddNoteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AddNoteComponent_mat_card_0_Template, 10, 0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AddNoteComponent_mat_card_1_Template, 9, 0, "mat-card", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.smallNote);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bigNote);
    } }, styles: ["@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined\");\nmat-expansion-panel[_ngcontent-%COMP%] {\n  width: 65%;\n  border-radius: 10px;\n  margin-top: 25px;\n}\n.mat-expansion-panel[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n}\n  .mat-drawer-content {\n  overflow: unset;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-grow: 12;\n  padding-top: 10px;\n}\n.icons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 3;\n  justify-content: space-around;\n}\n.mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  display: unset;\n  margin-right: 0;\n}\nmat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  min-width: 500px;\n  align-items: center;\n  border-radius: 10px;\n  margin-top: 25px;\n}\n.mat-card[_ngcontent-%COMP%]:not([class*=mat-elevation-z]) {\n  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);\n}\n.small-card-title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-grow: 12;\n  height: 15px !important;\n}\n.small-card-title[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  outline: none;\n  height: 100%;\n  border: none;\n  font-size: 18px;\n}\n.bigCard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.textarea[_ngcontent-%COMP%] {\n  width: 400px;\n  border: none;\n  font-size: 16px;\n  margin-left: 0px;\n  outline: none;\n}\n.big-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\n.big-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n}\nmat-card-footer[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1ub3RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDhGQUFBO0FBQ1I7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxtRkFBQTtBQUNKO0FBQ0U7RUFDSSxlQUFBO0FBRU47QUFBRTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFHTjtBQUFBO0VBQ00sYUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtBQUdOO0FBREk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUlSO0FBRkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUtSO0FBSEk7RUFDSSxtRkFBQTtBQU1SO0FBSkk7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBT1I7QUFOUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFRWjtBQUxJO0VBRUksYUFBQTtFQUNBLHNCQUFBO0FBT1I7QUFMSTtFQUVJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQU9SO0FBTEk7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFPUjtBQUxJO0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FBT1I7QUFMSTtFQUVJLFdBQUE7QUFPUiIsImZpbGUiOiJhZGQtbm90ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9pY29uP2ZhbWlseT1NYXRlcmlhbCtJY29uc3xNYXRlcmlhbCtJY29ucytPdXRsaW5lZFwiKTtcclxubWF0LWV4cGFuc2lvbi1wYW5lbCB7XHJcbiAgICB3aWR0aDogNjUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcblxyXG4gIH1cclxuICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggMCByZ2IoNjAgNjQgNjcgLyAzMCUpLCAwIDJweCA2cHggMnB4IHJnYig2MCA2NCA2NyAvIDE1JSk7XHJcbiAgfVxyXG4gIDo6bmctZGVlcCAubWF0LWRyYXdlci1jb250ZW50e1xyXG4gICAgICBvdmVyZmxvdzp1bnNldDtcclxuICB9IFxyXG4gIC50aXRsZXtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmbGV4LWdyb3c6IDEyO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbi5pY29uc3tcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1ncm93OiAzO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogdW5zZXQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgbWF0LWNhcmR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIG1pbi13aWR0aDo1MDBweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIH1cclxuICAgIC5tYXQtY2FyZDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDAgcmdiKDYwIDY0IDY3IC8gMzAlKSwgMCAycHggNnB4IDJweCByZ2IoNjAgNjQgNjcgLyAxNSUpO1xyXG4gICAgfVxyXG4gICAgLnNtYWxsLWNhcmQtdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTI7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4IWltcG9ydGFudDtcclxuICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYmlnQ2FyZFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC50ZXh0YXJlYVxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIC5iaWctY2FyZC10aXRsZVxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuYmlnLWNhcmQtY29udGVudFxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBtYXQtY2FyZC1mb290ZXJcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH0iXX0= */"] });


/***/ }),

/***/ 9805:
/*!*************************************************************************!*\
  !*** ./src/app/Components/forget-password/forget-password.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgetPasswordComponent": () => (/* binding */ ForgetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_Services_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Services/UserService/user-service.service */ 6438);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 781);











function ForgetPasswordComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "value is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
class ForgetPasswordComponent {
    constructor(userService, snackBar, router) {
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
    }
    ngOnInit() {
        this.ForgetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
        });
    }
    forgetPassword() {
        console.log("hello");
        this.userService.ForgetPassword(this.ForgetPasswordForm.value.email)
            .subscribe((result) => {
            localStorage.setItem('token', result.data);
            localStorage.setItem('email', this.ForgetPasswordForm.value.email);
            this.snackBar.open(`${result.message}`, '', {
                duration: 3000,
                verticalPosition: 'bottom',
                horizontalPosition: 'left'
            });
            if (result.status)
                this.router.navigate(['/login']);
        }, error => {
            this.snackBar.open(`${error.error.message}`, '', {
                duration: 3000,
                verticalPosition: 'bottom',
                horizontalPosition: 'left'
            });
        });
    }
}
ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) { return new (t || ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Services_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__.UserServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
ForgetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ForgetPasswordComponent, selectors: [["app-forget-password"]], decls: 32, vars: 5, consts: [[1, "ForgetPassword_container"], [1, "ForgetPassword_card"], [1, "ForgetPassword_inputs"], [2, "color", "#4285F4"], [2, "color", "#EA4335"], [2, "color", "#FBBC05"], [2, "color", "#34A853"], [2, "color", "#EB4E41"], [1, "ForgetPassword-form", 3, "formGroup"], ["appearance", "outline"], ["type", "email", "matInput", "", "id", "email", "formControlName", "email"], [4, "ngIf"], [1, "button_container"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function ForgetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "d");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Forget Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "User name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ForgetPasswordComponent_mat_error_26_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Go back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ForgetPasswordComponent_Template_button_click_30_listener() { return ctx.forgetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.ForgetPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ForgetPasswordForm.controls["email"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.ForgetPasswordForm.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap\");\n.ForgetPassword_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-top: 3%;\n}\n.ForgetPassword_card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: none;\n  align-items: none;\n  flex-wrap: wrap;\n  text-align: center;\n  width: 30%;\n  border: 0.5px solid #DDDFE2;\n}\n.ForgetPassword_card[_ngcontent-%COMP%]   .ForgetPassword_inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: none;\n  align-items: none;\n  flex-grow: 2;\n  padding: 10px;\n}\n.ForgetPassword_card[_ngcontent-%COMP%]   .ForgetPassword_inputs[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ForgetPassword_card[_ngcontent-%COMP%]   .ForgetPassword_inputs[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.ForgetPassword_card[_ngcontent-%COMP%]   .ForgetPassword_inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.ForgetPassword_card[_ngcontent-%COMP%]   .ForgetPassword_inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n.ForgetPassword_card[_ngcontent-%COMP%]   .ForgetPassword_inputs[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ForgetPassword_card[_ngcontent-%COMP%]   .ForgetPassword_inputs[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ForgetPassword_card[_ngcontent-%COMP%]   .ForgetPassword_inputs[_ngcontent-%COMP%]   .button_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: none;\n  flex-wrap: wrap;\n}\n.ForgetPassword_card[_ngcontent-%COMP%]   .ForgetPassword_inputs[_ngcontent-%COMP%]   .ForgetPassword-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:last-child) {\n  margin-top: 15px;\n}\n.ForgetPassword_card[_ngcontent-%COMP%]   .ForgetPassword_inputs[_ngcontent-%COMP%]   .ForgetPassword-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  margin-top: 25px;\n}\n@media only screen and (max-width: 1350px) {\n  .ForgetPassword_card[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n\n  .ForgetPassword_image_container[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .ForgetPassword_card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .ForgetPassword_inputs[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  mat-form-field[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .form-input[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n\n  .button_container[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .ForgetPassword_card[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .ForgetPassword_container[_ngcontent-%COMP%] {\n    margin-top: 40%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSxvRkFBQTtBQVNSO0VBTEksYUFEeUI7RUFFekIsbUJBRjBDO0VBRzFDLHVCQUg4RDtFQUk5RCxtQkFKaUY7RUFTakYsY0FBQTtBQUxKO0FBT0E7RUFWSSxhQUR5QjtFQUV6QixzQkFXZ0M7RUFWaEMscUJBVXVEO0VBVHZELGlCQVN3RTtFQUN4RSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFGSjtBQUlJO0VBbEJBLGFBRHlCO0VBRXpCLHNCQW1Cb0M7RUFsQnBDLHFCQWtCMkQ7RUFqQjNELGlCQWlCNEU7RUFDeEUsWUFBQTtFQUNBLGFBQUE7QUFBUjtBQUNRO0VBQ0ksZ0RBMUJIO0FBMkJUO0FBS1E7RUFDSSxXQUFBO0FBSFo7QUFJWTtFQUNJLFlBQUE7QUFGaEI7QUFLUTtFQUNJLGVBQUE7QUFIWjtBQUtRO0VBQ0ksZUEzQ0Y7QUF3Q1Y7QUFLUTtFQTFDSixhQUR5QjtFQUV6QixtQkFGMEM7RUFHMUMsOEJBMEM2QztFQXpDN0MsaUJBeUN1RTtFQUMvRCxlQUFBO0FBRFo7QUFNWTtFQUNJLGdCQUFBO0FBSmhCO0FBTVk7RUFDRyxnQkFBQTtBQUpmO0FBVUE7RUFDSTtJQUVJLFVBQUE7RUFSTjs7RUFVRTtJQUVJLHdCQUFBO0VBUk47O0VBV0U7SUFFSSxzQkFBQTtFQVROOztFQVdFO0lBRUksc0JBQUE7RUFUTjs7RUFXRTtJQUNJLFVBQUE7RUFSTjs7RUFVRTtJQUVJLHFCQUFBO0VBUk47O0VBVUU7SUFFSSxxQkFBQTtFQVJOO0FBQ0Y7QUFVQTtFQUNJO0lBRUksV0FBQTtJQUNBLFlBQUE7RUFUTjs7RUFXRTtJQUVJLGVBQUE7RUFUTjtBQUNGIiwiZmlsZSI6ImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZkaXNwbGF5PXN3YXAnKTtcclxuJGhpbnRTaXplOjEycHg7XHJcbiRmZmFtaWx5OlZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG5AbWl4aW4gZGlzcGxheUZsZXgoJHByb3BlcnR5OmZsZXgsICRkaXJlY3Rpb246cm93LCRqdXN0aWZ5Q29udGVudDpjZW50ZXIsJGFsaWduSXRlbXM6Y2VudGVyKSB7XHJcbiAgICBkaXNwbGF5OiAkcHJvcGVydHk7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjokZGlyZWN0aW9uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeUNvbnRlbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogJGFsaWduSXRlbXM7XHJcbiAgfVxyXG4uRm9yZ2V0UGFzc3dvcmRfY29udGFpbmVyXHJcbntcclxuICAgIEBpbmNsdWRlIGRpc3BsYXlGbGV4O1xyXG4gICAgbWFyZ2luLXRvcDozJTtcclxufSAgIFxyXG4uRm9yZ2V0UGFzc3dvcmRfY2FyZFxyXG57XHJcbiAgICBAaW5jbHVkZSBkaXNwbGF5RmxleCgkZGlyZWN0aW9uOmNvbHVtbiwkanVzdGlmeUNvbnRlbnQ6bm9uZSwkYWxpZ25JdGVtczpub25lKTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBib3JkZXI6MC41cHggc29saWQgI0REREZFMjtcclxuICAgIC8vIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgLkZvcmdldFBhc3N3b3JkX2lucHV0c1xyXG4gICAge1xyXG4gICAgICAgIEBpbmNsdWRlIGRpc3BsYXlGbGV4KCRkaXJlY3Rpb246Y29sdW1uLCRqdXN0aWZ5Q29udGVudDpub25lLCRhbGlnbkl0ZW1zOm5vbmUpO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTokZmZhbWlseTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgIEBleHRlbmQgaDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAgICAgbWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYXQtbGFiZWx7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWhpbnR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogJGhpbnRTaXplO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGlzcGxheUZsZXgoJGp1c3RpZnlDb250ZW50OnNwYWNlLWJldHdlZW4sJGFsaWduSXRlbXM6bm9uZSk7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5Gb3JnZXRQYXNzd29yZC1mb3JtXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBkaXY6bm90KDpsYXN0LWNoaWxkKXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzUwcHgpIHtcclxuICAgIC5Gb3JnZXRQYXNzd29yZF9jYXJkXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuICAgIC5Gb3JnZXRQYXNzd29yZF9pbWFnZV9jb250YWluZXJcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lIWltcG9ydGFudDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5Gb3JnZXRQYXNzd29yZF9jYXJkXHJcbiAgICB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5Gb3JnZXRQYXNzd29yZF9pbnB1dHNcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmZvcm0taW5wdXRcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogOTAlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5idXR0b25fY29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDkwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLkZvcmdldFBhc3N3b3JkX2NhcmRcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuRm9yZ2V0UGFzc3dvcmRfY29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo0MCU7XHJcbiAgICB9ICBcclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 4611:
/*!***************************************************!*\
  !*** ./src/app/Components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 2220);
/* harmony import */ var _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-note/add-note.component */ 9844);










class HomeComponent {
    constructor() {
        this.opened = true;
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 56, vars: 5, consts: [[1, "home_container"], [1, "logo"], ["mat-icon-button", "", 3, "click"], [1, "menu-icon"], ["src", "../../../assets/images/fundooLogo.png", 1, "img_logo"], [2, "color", "#5F6C7F"], ["appearance", "fill", 1, "example-full-width"], ["matInput", "", "placeholder", "Search"], ["matPrefix", ""], ["matSuffix", ""], [1, "example-spacer"], ["mat-icon-button", "", "aria-label", "Example icon-button with heart icon", 1, "example-icon", "favorite-icon"], ["mat-icon-button", "", "aria-label", "Example icon-button with share icon", 1, "example-icon"], [1, "main"], ["mode", "side", 1, "side_nav", 3, "opened", "openedChange", "mouseover"], ["sidenav", ""], ["mat-list-icon", "", 1, "sidenavLogo"], ["mat-line", ""], ["mat-list-icon", "", 1, "sidenavLogo", "material-icons-outlined"], [1, "mainContent"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](27); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Fundoo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-sidenav-container", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-sidenav", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function HomeComponent_Template_mat_sidenav_openedChange_26_listener($event) { return ctx.opened = $event; })("mouseover", function HomeComponent_Template_mat_sidenav_mouseover_26_listener() { return ctx.opened = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "lightbulb_outline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-icon", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "notifications_none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Reminders");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Edit labels");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Trash");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-sidenav-content", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "app-add-note");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", 600, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("margin-right", 12, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", ctx.opened);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__.MatToolbar, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_6__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatSuffix, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenav, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatNavList, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListItem, _angular_material_list__WEBPACK_IMPORTED_MODULE_8__.MatListIconCssMatStyler, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatLine, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__.MatSidenavContent, _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_0__.AddNoteComponent], styles: ["@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined\");\n.home_container[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background-color: white;\n  border-bottom: 1px solid #dadce0;\n}\n.home_container[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.home_container[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-flex {\n  display: flex;\n  align-items: center;\n  border-radius: 10px;\n  margin-top: 2em;\n  font-size: 15px;\n  padding: 0.25em;\n  max-height: 40px;\n}\n.home_container[_ngcontent-%COMP%]     .mat-form-field .mat-form-field-underline {\n  width: 0;\n}\n.home_container[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  color: #5F6368;\n}\n.home_container[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  min-height: 600px;\n  background-color: white;\n}\n.home_container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%]:not(.mat-drawer-opened) {\n  transform: translate3d(0, 0, 0) !important;\n  visibility: visible !important;\n  width: 70px !important;\n  overflow: hidden !important;\n}\n.home_container[_ngcontent-%COMP%]   mat-sidenav[_ngcontent-%COMP%] {\n  width: 250px;\n  border-right: 0;\n}\n.home_container[_ngcontent-%COMP%]   mat-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.home_container[_ngcontent-%COMP%]   .sidenavLogo[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n}\n.home_container[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]:hover {\n  background-color: #FEEFC3;\n  border-bottom-right-radius: 30px;\n  border-top-right-radius: 30px;\n}\n.home_container[_ngcontent-%COMP%]   .img_logo[_ngcontent-%COMP%] {\n  height: 35px;\n  margin-top: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsOEZBQUE7QUFHSjtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBRlI7QUFJSTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtBQUhSO0FBTVE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSlY7QUFNUTtFQUNFLFFBQUE7QUFKVjtBQVFJO0VBRUksY0FBQTtBQVBSO0FBU0k7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0FBUFI7QUFTSTtFQUNJLDBDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0FBUFI7QUFTTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBUFI7QUFTTTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUFY7QUFTTTtFQUVJLFlBQUE7RUFDQSxXQUFBO0FBUlY7QUFVTTtFQUVJLHlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtBQVRWO0FBV007RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQVRWIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vaWNvbj9mYW1pbHk9TWF0ZXJpYWwrSWNvbnN8TWF0ZXJpYWwrSWNvbnMrT3V0bGluZWRcIik7XHJcbi5ob21lX2NvbnRhaW5lclxyXG57XHJcbiAgICBtYXQtdG9vbGJhclxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIxOCwyMjAsMjI0KTtcclxuICAgIH1cclxuICAgIC5sb2dvXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMC4yNWVtO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDo0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5tZW51LWljb25cclxuICAgIHtcclxuICAgICAgICBjb2xvcjogIzVGNjM2ODtcclxuICAgIH1cclxuICAgIC5tYWlue1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG4gICAgbWF0LXNpZGVuYXY6bm90KC5tYXQtZHJhd2VyLW9wZW5lZCkge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgIWltcG9ydGFudDtcclxuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDcwcHggIWltcG9ydGFudDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBtYXQtc2lkZW5hdiB7XHJcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgICBtYXQtc2lkZW5hdi1jb250ZW50e1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICAgIC5zaWRlbmF2TG9nb1xyXG4gICAgICB7XHJcbiAgICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIG1hdC1saXN0LWl0ZW06aG92ZXJcclxuICAgICAge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFRUZDMztcclxuICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmltZ19sb2dve1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgIFxyXG59Il19 */"] });


/***/ }),

/***/ 7171:
/*!*****************************************************!*\
  !*** ./src/app/Components/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_Services_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Services/UserService/user-service.service */ 6438);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 2529);












function LoginComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "value is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "value is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/forgetPassword"]; };
const _c1 = function () { return ["/register"]; };
class LoginComponent {
    constructor(userService, snackBar, router) {
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
        this.hide = true;
    }
    ngOnInit() {
        this.LoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required,]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
        });
    }
    Login() {
        this.userService.Login(this.LoginForm.value)
            .subscribe((result) => {
            console.log(result);
            this.snackBar.open(`${result.message}`, '', {
                duration: 3000,
                verticalPosition: 'bottom',
                horizontalPosition: 'left'
            });
            if (result.status == true) {
                this.router.navigate(['/login']);
            }
        }, error => {
            this.snackBar.open(`${error.error.message}`, '', {
                duration: 3000,
                verticalPosition: 'bottom',
                horizontalPosition: 'left'
            });
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Services_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__.UserServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 44, vars: 12, consts: [[1, "login_container"], [1, "login_card"], [1, "login_inputs"], [2, "color", "#4285F4"], [2, "color", "#EA4335"], [2, "color", "#FBBC05"], [2, "color", "#34A853"], [2, "color", "#EB4E41"], [1, "login-form", 3, "formGroup"], ["appearance", "outline"], ["type", "email", "matInput", "", "id", "email", "formControlName", "email"], [4, "ngIf"], ["matInput", "", "id", "password", "formControlName", "password", 3, "type"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["href", "", 1, "forget_password", 3, "routerLink"], [1, "button_container"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "d");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Use your Fundoo Notes Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "User name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, LoginComponent_mat_error_26_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, LoginComponent_mat_error_35_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_42_listener() { return ctx.Login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.LoginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.LoginForm.controls["email"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", "Hide password")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.LoginForm.controls["password"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.LoginForm.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatSuffix, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap\");\n.login_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-top: 3%;\n}\n.login_card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: none;\n  align-items: none;\n  flex-wrap: wrap;\n  text-align: center;\n  width: 30%;\n  border: 0.5px solid #DDDFE2;\n}\n.login_card[_ngcontent-%COMP%]   .login_inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: none;\n  align-items: none;\n  flex-grow: 2;\n  padding: 10px;\n}\n.login_card[_ngcontent-%COMP%]   .login_inputs[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .login_card[_ngcontent-%COMP%]   .login_inputs[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.login_card[_ngcontent-%COMP%]   .login_inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.login_card[_ngcontent-%COMP%]   .login_inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n.login_card[_ngcontent-%COMP%]   .login_inputs[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.login_card[_ngcontent-%COMP%]   .login_inputs[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.login_card[_ngcontent-%COMP%]   .login_inputs[_ngcontent-%COMP%]   .forget_password[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: none;\n  justify-content: none;\n  align-items: flex-start;\n  text-decoration: none;\n  font-weight: bold;\n  color: #1A73E8;\n  margin-left: 45px;\n}\n.login_card[_ngcontent-%COMP%]   .login_inputs[_ngcontent-%COMP%]   .button_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: none;\n  flex-wrap: wrap;\n}\n.login_card[_ngcontent-%COMP%]   .login_inputs[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:last-child) {\n  margin-top: 15px;\n}\n.login_card[_ngcontent-%COMP%]   .login_inputs[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  margin-top: 95px;\n}\n@media only screen and (max-width: 1350px) {\n  .login_card[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n\n  .login_image_container[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .login_card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .login_inputs[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  mat-form-field[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .form-input[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n\n  .button_container[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .login_card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBU1I7RUFMSSxhQUR5QjtFQUV6QixtQkFGMEM7RUFHMUMsdUJBSDhEO0VBSTlELG1CQUppRjtFQVNqRixjQUFBO0FBTEo7QUFPQTtFQVZJLGFBRHlCO0VBRXpCLHNCQVdnQztFQVZoQyxxQkFVdUQ7RUFUdkQsaUJBU3dFO0VBQ3hFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQUZKO0FBSUk7RUFsQkEsYUFEeUI7RUFFekIsc0JBbUJvQztFQWxCcEMscUJBa0IyRDtFQWpCM0QsaUJBaUI0RTtFQUN4RSxZQUFBO0VBQ0EsYUFBQTtBQUFSO0FBQ1E7RUFDSSxnREExQkg7QUEyQlQ7QUFJUTtFQUNJLFVBQUE7QUFGWjtBQUdZO0VBQ0ksWUFBQTtBQURoQjtBQUlRO0VBQ0ksZUFBQTtBQUZaO0FBSVE7RUFDSSxlQTFDRjtBQXdDVjtBQUlRO0VBekNKLGFBRHlCO0VBRXpCLG9CQTBDd0M7RUF6Q3hDLHFCQXlDNkQ7RUF4QzdELHVCQXdDOEU7RUFDdEUscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQUFaO0FBRVE7RUFqREosYUFEeUI7RUFFekIsbUJBRjBDO0VBRzFDLDhCQWlEOEQ7RUFoRDlELGlCQWdEeUM7RUFDakMsZUFBQTtBQUVaO0FBRVk7RUFDSSxnQkFBQTtBQUFoQjtBQUVZO0VBQ0csZ0JBQUE7QUFBZjtBQU1BO0VBQ0k7SUFFSSxVQUFBO0VBSk47O0VBTUU7SUFFSSx3QkFBQTtFQUpOOztFQU9FO0lBRUksc0JBQUE7RUFMTjs7RUFPRTtJQUVJLHNCQUFBO0VBTE47O0VBT0U7SUFDSSxVQUFBO0VBSk47O0VBTUU7SUFFSSxxQkFBQTtFQUpOOztFQU1FO0lBRUkscUJBQUE7RUFKTjtBQUNGO0FBTUE7RUFDSTtJQUVJLFdBQUE7RUFMTjtBQUNGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwJmRpc3BsYXk9c3dhcCcpO1xyXG4kaGludFNpemU6MTJweDtcclxuJGZmYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbkBtaXhpbiBkaXNwbGF5RmxleCgkcHJvcGVydHk6ZmxleCwgJGRpcmVjdGlvbjpyb3csJGp1c3RpZnlDb250ZW50OmNlbnRlciwkYWxpZ25JdGVtczpjZW50ZXIpIHtcclxuICAgIGRpc3BsYXk6ICRwcm9wZXJ0eTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiRkaXJlY3Rpb247XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Q29udGVudDtcclxuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ25JdGVtcztcclxuICB9XHJcbi5sb2dpbl9jb250YWluZXJcclxue1xyXG4gICAgQGluY2x1ZGUgZGlzcGxheUZsZXg7XHJcbiAgICBtYXJnaW4tdG9wOjMlO1xyXG59ICAgXHJcbi5sb2dpbl9jYXJkXHJcbntcclxuICAgIEBpbmNsdWRlIGRpc3BsYXlGbGV4KCRkaXJlY3Rpb246Y29sdW1uLCRqdXN0aWZ5Q29udGVudDpub25lLCRhbGlnbkl0ZW1zOm5vbmUpO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJvcmRlcjowLjVweCBzb2xpZCAjRERERkUyO1xyXG4gICAgLy8gbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICAubG9naW5faW5wdXRzXHJcbiAgICB7XHJcbiAgICAgICAgQGluY2x1ZGUgZGlzcGxheUZsZXgoJGRpcmVjdGlvbjpjb2x1bW4sJGp1c3RpZnlDb250ZW50Om5vbmUsJGFsaWduSXRlbXM6bm9uZSk7XHJcbiAgICAgICAgZmxleC1ncm93OiAyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiRmZmFtaWx5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXQtY2FyZC10aXRsZXtcclxuICAgICAgICAgICAgQGV4dGVuZCBoMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1sYWJlbHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXQtaGludHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAkaGludFNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mb3JnZXRfcGFzc3dvcmRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGRpc3BsYXlGbGV4KCRkaXJlY3Rpb246bm9uZSwkanVzdGlmeUNvbnRlbnQ6bm9uZSwkYWxpZ25JdGVtczpmbGV4LXN0YXJ0KTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICMxQTczRTg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0NXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgQGluY2x1ZGUgZGlzcGxheUZsZXgoJGFsaWduSXRlbXM6bm9uZSwkanVzdGlmeUNvbnRlbnQ6c3BhY2UtYmV0d2Vlbik7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ2luLWZvcm1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpdjpub3QoOmxhc3QtY2hpbGQpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDk1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xyXG4gICAgLmxvZ2luX2NhcmRcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX2ltYWdlX2NvbnRhaW5lclxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmxvZ2luX2NhcmRcclxuICAgIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX2lucHV0c1xyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1pbnB1dFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA5MCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbl9jb250YWluZXJcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogOTAlIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAubG9naW5fY2FyZFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 466:
/*!***************************************************************!*\
  !*** ./src/app/Components/note-icons/note-icons.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoteIconsComponent": () => (/* binding */ NoteIconsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _add_note_add_note_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../add-note/add-note.component */ 9844);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 781);





class NoteIconsComponent {
    constructor(addNote) {
        this.addNote = addNote;
    }
    ngOnInit() {
    }
    Close() {
        this.addNote.bigNote = false;
        this.addNote.smallNote = true;
    }
}
NoteIconsComponent.ɵfac = function NoteIconsComponent_Factory(t) { return new (t || NoteIconsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_add_note_add_note_component__WEBPACK_IMPORTED_MODULE_0__.AddNoteComponent)); };
NoteIconsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NoteIconsComponent, selectors: [["app-note-icons"]], decls: 19, vars: 0, consts: [[1, "icons"], ["mat-list-icon", "", 1, "material-icons-outlined"], ["mat-button", "", "color", "primary", 3, "click"]], template: function NoteIconsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "notifications_none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "person_add");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "color_lens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "archive");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "redo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "undo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NoteIconsComponent_Template_button_click_17_listener() { return ctx.Close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListIconCssMatStyler, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: [".icons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n}\n.icons[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #767676;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUtaWNvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUVSIiwiZmlsZSI6Im5vdGUtaWNvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbnN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hdC1pY29ue1xyXG4gICAgICAgIGNvbG9yOiM3Njc2NzY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59Il19 */"] });


/***/ }),

/***/ 5498:
/*!***********************************************************!*\
  !*** ./src/app/Components/register/register.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_Services_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Services/UserService/user-service.service */ 6438);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 781);












function RegisterComponent_mat_error_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getErrorMessage("firstName"));
} }
function RegisterComponent_mat_error_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage("lastName"));
} }
function RegisterComponent_mat_error_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.getErrorMessage("email"));
} }
function RegisterComponent_mat_error_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r3.getErrorMessage("password"));
} }
function RegisterComponent_mat_error_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password doesn't match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/login"]; };
class RegisterComponent {
    constructor(userService, snackBar, router) {
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
        this.hide = true;
        this.isVisible = true;
    }
    ngOnInit() {
        this.RegisterForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^[A-Z]{1}[a-zA-Z]{2,}'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$')]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
        });
    }
    showPassword() {
        this.hide = !this.hide;
    }
    getErrorMessage(inputName) {
        let minLen = inputName == "password" ? 8 : 3;
        if (this.RegisterForm.controls[`${inputName}`].hasError('required')) {
            return 'You must enter a value';
        }
        else if (this.RegisterForm.controls[`${inputName}`].hasError('minlength')) {
            return `minimum ${minLen} characters`;
        }
        else if (this.RegisterForm.controls[`${inputName}`].hasError('email')) {
            return `${inputName} is invalid`;
        }
        return this.RegisterForm.controls[`${inputName}`].hasError('pattern') ? `${inputName} is invalid` : '';
    }
    Register() {
        this.userService.Register(this.RegisterForm.value)
            .subscribe((result) => {
            this.snackBar.open(`${result.message}`, '', {
                duration: 3000,
                verticalPosition: 'bottom',
                horizontalPosition: 'left'
            });
            if (result.status == true) {
                this.router.navigate(['/login']);
            }
        }, error => {
            this.snackBar.open(`${error.error.message}`, '', {
                duration: 3000,
                verticalPosition: 'bottom',
                horizontalPosition: 'left'
            });
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Services_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__.UserServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 63, vars: 14, consts: [[1, "register_container"], [1, "register_card"], [1, "register_inputs"], [2, "color", "#4285F4"], [2, "color", "#EA4335"], [2, "color", "#FBBC05"], [2, "color", "#34A853"], [2, "color", "#EB4E41"], [1, "register-form", 3, "formGroup"], [1, "inline-inputs"], ["appearance", "outline"], ["type", "text", "matInput", "", "id", "firstName", "formControlName", "firstName"], [4, "ngIf"], ["type", "text", "matInput", "", "id", "lastName", "formControlName", "lastName"], ["appearance", "outline", 1, "form-input"], ["type", "email", "matInput", "", "id", "email", "formControlName", "email"], ["appearance", "outline", 3, "click"], ["matInput", "", "id", "password", "formControlName", "password", 3, "type"], ["matInput", "", "id", "confirmPassword", "formControlName", "confirmPassword", 3, "type", "pattern"], [2, "margin-top", "-13px", "margin-left", "11px", "width", "200%"], ["id", "showPassword", 2, "margin-left", "3px", 3, "click"], [1, "button_container"], ["mat-button", "", "color", "primary", 3, "routerLink"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], [1, "register_image_container"], ["src", "../../../assets/images/account.svg"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "d");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Create your Fundoo Notes Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "First name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, RegisterComponent_mat_error_24_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Last name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, RegisterComponent_mat_error_29_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "mat-form-field", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "User name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "You can use letters, numbers & periods");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, RegisterComponent_mat_error_37_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_mat_form_field_click_39_listener() { return ctx.isVisible = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, RegisterComponent_mat_error_43_Template, 2, 1, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-form-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_mat_form_field_click_44_listener() { return ctx.isVisible = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, RegisterComponent_mat_error_48_Template, 2, 0, "mat-error", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-hint", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Use 8 or more characters with a mix of letters, numbers & symbols");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-checkbox", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_mat_checkbox_click_52_listener() { return ctx.showPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Show Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Sign in instead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_57_listener() { return ctx.Register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Add your notes and reminder here");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.RegisterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.RegisterForm.controls["firstName"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.RegisterForm.controls["lastName"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.RegisterForm.controls["email"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.RegisterForm.controls["password"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("pattern", ctx.RegisterForm.value.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.RegisterForm.controls["confirmPassword"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("display", ctx.isVisible ? "block" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.RegisterForm.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatHint, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.PatternValidator, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap\");\n.register_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-top: 3%;\n}\n.register_card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  width: 49%;\n  border: 0.5px solid #DDDFE2;\n  min-height: 500px;\n}\n.register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: none;\n  align-items: none;\n  flex-grow: 2;\n  width: 0%;\n  padding: 10px;\n  font-family: \"Roboto\", sans-serif;\n}\n.register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n.register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%]   mat-error[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%]   .inline-inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: none;\n  flex-wrap: wrap;\n  width: 100%;\n}\n.register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%]   .button_container[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: none;\n}\n.register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:last-child) {\n  margin-top: 15px;\n}\n.register_card[_ngcontent-%COMP%]   .register_inputs[_ngcontent-%COMP%]   .register-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  margin-top: 95px;\n}\n.register_card[_ngcontent-%COMP%]   .register_image_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.register_card[_ngcontent-%COMP%]   .register_image_container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n}\n@media only screen and (max-width: 1350px) {\n  .register_card[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n\n  .register_image_container[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .register_card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .register_inputs[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  mat-form-field[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .form-input[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n\n  .button_container[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .register_card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBU1I7RUFMSSxhQUR5QjtFQUV6QixtQkFGMEM7RUFHMUMsdUJBSDhEO0VBSTlELG1CQUppRjtFQVNqRixjQUFBO0FBTEo7QUFPQTtFQUVJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUFMSjtBQU9JO0VBbEJBLGFBRHlCO0VBRXpCLHNCQW1Cb0M7RUFsQnBDLHFCQWtCMkQ7RUFqQjNELGlCQWlCNEU7RUFDeEUsWUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUFIUjtBQUlRO0VBQ0ksZ0RBNUJIO0FBMEJUO0FBT1E7RUFDSSxlQUFBO0FBTFo7QUFNWTtFQUNJLFlBQUE7QUFKaEI7QUFPUTtFQUNJLGVBQUE7QUFMWjtBQU9RO0VBQ0ksZUE1Q0Y7QUF1Q1Y7QUFPUTtFQUNJLGVBQUE7QUFMWjtBQU9RO0VBOUNKLGFBRHlCO0VBRXpCLG1CQUYwQztFQUcxQyw4QkE2QzZDO0VBNUM3QyxpQkE0Q3VFO0VBQy9ELGVBQUE7RUFDQSxXQUFBO0FBRlo7QUFJUTtFQUVJLFdBQUE7QUFIWjtBQUtRO0VBRUksZUFBQTtFQXpEUixhQUR5QjtFQUV6QixtQkFGMEM7RUFHMUMsOEJBd0Q2QztFQXZEN0MsaUJBdUR1RTtBQUQzRTtBQUtZO0VBQ0ksZ0JBQUE7QUFIaEI7QUFLWTtFQUNHLGdCQUFBO0FBSGY7QUFRSTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUE1RUosYUFEeUI7RUFFekIsc0JBNEVvQztFQTNFcEMsdUJBSDhEO0VBSTlELG1CQUppRjtBQTBFckY7QUFLUTtFQUNJLGlDQUFBO0VBQ0EsZUFBQTtBQUhaO0FBUUE7RUFDSTtJQUVJLFVBQUE7RUFOTjs7RUFRRTtJQUVJLHdCQUFBO0VBTk47O0VBU0U7SUFFSSxzQkFBQTtFQVBOOztFQVNFO0lBRUksc0JBQUE7RUFQTjs7RUFTRTtJQUNJLFVBQUE7RUFOTjs7RUFRRTtJQUVJLHFCQUFBO0VBTk47O0VBUUU7SUFFSSxxQkFBQTtFQU5OO0FBQ0Y7QUFRQTtFQUNJO0lBRUksV0FBQTtFQVBOO0FBQ0YiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAxMDAmZGlzcGxheT1zd2FwJyk7XHJcbiRoaW50U2l6ZToxMnB4O1xyXG4kZmZhbWlseTpWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuQG1peGluIGRpc3BsYXlGbGV4KCRwcm9wZXJ0eTpmbGV4LCAkZGlyZWN0aW9uOnJvdywkanVzdGlmeUNvbnRlbnQ6Y2VudGVyLCRhbGlnbkl0ZW1zOmNlbnRlcikge1xyXG4gICAgZGlzcGxheTogJHByb3BlcnR5O1xyXG4gICAgZmxleC1kaXJlY3Rpb246JGRpcmVjdGlvbjtcclxuICAgIGp1c3RpZnktY29udGVudDogJGp1c3RpZnlDb250ZW50O1xyXG4gICAgYWxpZ24taXRlbXM6ICRhbGlnbkl0ZW1zO1xyXG4gIH1cclxuLnJlZ2lzdGVyX2NvbnRhaW5lclxyXG57XHJcbiAgICBAaW5jbHVkZSBkaXNwbGF5RmxleDtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG59ICAgXHJcbi5yZWdpc3Rlcl9jYXJkXHJcbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB3aWR0aDogNDklO1xyXG4gICAgYm9yZGVyOjAuNXB4IHNvbGlkICNERERGRTI7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIFxyXG4gICAgLnJlZ2lzdGVyX2lucHV0c1xyXG4gICAge1xyXG4gICAgICAgIEBpbmNsdWRlIGRpc3BsYXlGbGV4KCRkaXJlY3Rpb246Y29sdW1uLCRqdXN0aWZ5Q29udGVudDpub25lLCRhbGlnbkl0ZW1zOm5vbmUpO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiRmZmFtaWx5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBtYXQtY2FyZC10aXRsZXtcclxuICAgICAgICAgICAgQGV4dGVuZCBoMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWxhYmVse1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1oaW50e1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRoaW50U2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWVycm9ye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbmxpbmUtaW5wdXRze1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBkaXNwbGF5RmxleCgkanVzdGlmeUNvbnRlbnQ6c3BhY2UtYmV0d2VlbiwkYWxpZ25JdGVtczpub25lKTtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZvcm0taW5wdXRcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYnV0dG9uX2NvbnRhaW5lclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBkaXNwbGF5RmxleCgkanVzdGlmeUNvbnRlbnQ6c3BhY2UtYmV0d2VlbiwkYWxpZ25JdGVtczpub25lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZ2lzdGVyLWZvcm1cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGRpdjpub3QoOmxhc3QtY2hpbGQpe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDk1cHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlcl9pbWFnZV9jb250YWluZXJcclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBAaW5jbHVkZSBkaXNwbGF5RmxleCgkZGlyZWN0aW9uOmNvbHVtbik7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XHJcbiAgICAucmVnaXN0ZXJfY2FyZFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXJfaW1hZ2VfY29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXJfY2FyZFxyXG4gICAge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXJfaW5wdXRzXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgbWF0LWZvcm0tZmllbGR7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuICAgIC5mb3JtLWlucHV0XHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDkwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uX2NvbnRhaW5lclxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA5MCUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5yZWdpc3Rlcl9jYXJkXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 1698:
/*!***********************************************************************!*\
  !*** ./src/app/Components/reset-password/reset-password.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_Services_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Services/UserService/user-service.service */ 6438);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 781);












function ResetPasswordComponent_mat_error_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "value is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ResetPasswordComponent_mat_error_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.getErrorMessage());
} }
function ResetPasswordComponent_mat_error_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password doesn't match");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ResetPasswordComponent {
    constructor(userService, snackBar, router) {
        this.userService = userService;
        this.snackBar = snackBar;
        this.router = router;
        this.hide = true;
        this.userEmail = localStorage.getItem('email');
    }
    ngOnInit() {
        this.ResetPasswordForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(`${this.userEmail}`, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern('^.*(?=.{8,})(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!*@#$%^&+=]).*$')]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required])
        });
    }
    showPassword() {
        this.hide = !this.hide;
    }
    getErrorMessage() {
        if (this.ResetPasswordForm.controls['password'].hasError('required')) {
            return 'You must enter a value';
        }
        return this.ResetPasswordForm.controls['password'].hasError('pattern') ? `password should contain mix of numbers,speacial characters,captial and small letters and minimum 8 characters` : '';
    }
    ResetPassword() {
        console.log("resetpassword");
        this.userService.ResetPassword(this.ResetPasswordForm.value)
            .subscribe((result) => {
            this.snackBar.open(`${result.message}`, '', {
                duration: 3000,
                verticalPosition: 'bottom',
                horizontalPosition: 'left'
            });
            if (result.status == true) {
                localStorage.clear();
                this.router.navigate(['/login']);
            }
        }, error => {
            this.snackBar.open(`${error.error.message}`, '', {
                duration: 3000,
                verticalPosition: 'bottom',
                horizontalPosition: 'left'
            });
        });
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_Services_UserService_user_service_service__WEBPACK_IMPORTED_MODULE_0__.UserServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 45, vars: 8, consts: [[1, "ResetPassword_container"], [1, "ResetPassword_card"], [1, "ResetPassword_inputs"], [2, "color", "#4285F4"], [2, "color", "#EA4335"], [2, "color", "#FBBC05"], [2, "color", "#34A853"], [2, "color", "#EB4E41"], [1, "ResetPassword-form", 3, "formGroup"], ["appearance", "outline"], ["type", "email", "matInput", "", "id", "email", "formControlName", "email"], [4, "ngIf"], ["matInput", "", "id", "password", "formControlName", "password", 3, "type"], ["matInput", "", "id", "confirmPassword", "formControlName", "confirmPassword", 3, "type", "pattern"], ["id", "showPassword", 3, "click"], [1, "button_container"], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled", "click"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "F");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "u");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "d");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "o");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Reset Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Enter your New Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "User name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ResetPasswordComponent_mat_error_26_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ResetPasswordComponent_mat_error_32_Template, 2, 1, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, ResetPasswordComponent_mat_error_38_Template, 2, 0, "mat-error", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "mat-checkbox", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_mat_checkbox_click_40_listener() { return ctx.showPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Show Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ResetPasswordComponent_Template_button_click_43_listener() { return ctx.ResetPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Change password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.ResetPasswordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ResetPasswordForm.controls["email"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ResetPasswordForm.controls["password"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("pattern", ctx.ResetPasswordForm.value.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ResetPasswordForm.controls["confirmPassword"].invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.ResetPasswordForm.invalid);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.PatternValidator, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__.MatCheckbox, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap\");\n.ResetPassword_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  margin-top: 3%;\n}\n.ResetPassword_card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: none;\n  align-items: none;\n  flex-wrap: wrap;\n  text-align: center;\n  width: 30%;\n  border: 0.5px solid #DDDFE2;\n}\n.ResetPassword_card[_ngcontent-%COMP%]   .ResetPassword_inputs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: none;\n  align-items: none;\n  flex-grow: 2;\n  padding: 10px;\n}\n.ResetPassword_card[_ngcontent-%COMP%]   .ResetPassword_inputs[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .ResetPassword_card[_ngcontent-%COMP%]   .ResetPassword_inputs[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%] {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n.ResetPassword_card[_ngcontent-%COMP%]   .ResetPassword_inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.ResetPassword_card[_ngcontent-%COMP%]   .ResetPassword_inputs[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 3px;\n}\n.ResetPassword_card[_ngcontent-%COMP%]   .ResetPassword_inputs[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.ResetPassword_card[_ngcontent-%COMP%]   .ResetPassword_inputs[_ngcontent-%COMP%]   mat-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.ResetPassword_card[_ngcontent-%COMP%]   .ResetPassword_inputs[_ngcontent-%COMP%]   .button_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: none;\n  flex-wrap: wrap;\n}\n.ResetPassword_card[_ngcontent-%COMP%]   .ResetPassword_inputs[_ngcontent-%COMP%]   #showPassword[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: none;\n  margin-left: 10%;\n}\n.ResetPassword_card[_ngcontent-%COMP%]   .ResetPassword_inputs[_ngcontent-%COMP%]   .ResetPassword-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:not(:last-child) {\n  margin-top: 15px;\n}\n.ResetPassword_card[_ngcontent-%COMP%]   .ResetPassword_inputs[_ngcontent-%COMP%]   .ResetPassword-form[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  margin-top: 25px;\n}\n@media only screen and (max-width: 1350px) {\n  .ResetPassword_card[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n\n  .ResetPassword_image_container[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n\n  .ResetPassword_card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .ResetPassword_inputs[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n\n  mat-form-field[_ngcontent-%COMP%] {\n    width: 90%;\n  }\n\n  .form-input[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n\n  .button_container[_ngcontent-%COMP%] {\n    width: 90% !important;\n  }\n}\n@media only screen and (max-width: 700px) {\n  .ResetPassword_card[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n  }\n\n  .ResetPassword_container[_ngcontent-%COMP%] {\n    margin-top: 40%;\n  }\n}\n@media only screen and (max-width: 300px) {\n  mat-error[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9GQUFBO0FBU1I7RUFMSSxhQUR5QjtFQUV6QixtQkFGMEM7RUFHMUMsdUJBSDhEO0VBSTlELG1CQUppRjtFQVNqRixjQUFBO0FBTEo7QUFPQTtFQVZJLGFBRHlCO0VBRXpCLHNCQVdnQztFQVZoQyxxQkFVdUQ7RUFUdkQsaUJBU3dFO0VBQ3hFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtBQUZKO0FBR0k7RUFqQkEsYUFEeUI7RUFFekIsc0JBa0JvQztFQWpCcEMscUJBaUIyRDtFQWhCM0QsaUJBZ0I0RTtFQUN4RSxZQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQVE7RUFDSSxnREF6Qkg7QUEyQlQ7QUFHUTtFQUNJLFdBQUE7QUFEWjtBQUVZO0VBQ0ksWUFBQTtBQUFoQjtBQUdRO0VBQ0ksZUFBQTtBQURaO0FBR1E7RUFDSSxlQXpDRjtBQXdDVjtBQUdRO0VBeENKLGFBRHlCO0VBRXpCLG1CQUYwQztFQUcxQyx5QkF3QzZDO0VBdkM3QyxpQkF1Q2tFO0VBQzFELGVBQUE7QUFDWjtBQUNRO0VBN0NKLGFBRHlCO0VBRXpCLG1CQUYwQztFQUcxQywyQkE2QzZDO0VBNUM3QyxpQkE0Q29FO0VBQzVELGdCQUFBO0FBR1o7QUFDWTtFQUNJLGdCQUFBO0FBQ2hCO0FBQ1k7RUFDRyxnQkFBQTtBQUNmO0FBS0E7RUFDSTtJQUVJLFVBQUE7RUFITjs7RUFLRTtJQUVJLHdCQUFBO0VBSE47O0VBTUU7SUFFSSxzQkFBQTtFQUpOOztFQU1FO0lBRUksc0JBQUE7RUFKTjs7RUFNRTtJQUNJLFVBQUE7RUFITjs7RUFLRTtJQUVJLHFCQUFBO0VBSE47O0VBS0U7SUFFSSxxQkFBQTtFQUhOO0FBQ0Y7QUFLQTtFQUNJO0lBRUksV0FBQTtJQUNBLFlBQUE7RUFKTjs7RUFNRTtJQUVJLGVBQUE7RUFKTjtBQUNGO0FBTUE7RUFDSTtJQUNJLGNBQUE7RUFKTjtBQUNGIiwiZmlsZSI6InJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwJmRpc3BsYXk9c3dhcCcpO1xyXG4kaGludFNpemU6MTJweDtcclxuJGZmYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbkBtaXhpbiBkaXNwbGF5RmxleCgkcHJvcGVydHk6ZmxleCwgJGRpcmVjdGlvbjpyb3csJGp1c3RpZnlDb250ZW50OmNlbnRlciwkYWxpZ25JdGVtczpjZW50ZXIpIHtcclxuICAgIGRpc3BsYXk6ICRwcm9wZXJ0eTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiRkaXJlY3Rpb247XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5Q29udGVudDtcclxuICAgIGFsaWduLWl0ZW1zOiAkYWxpZ25JdGVtcztcclxuICB9XHJcbi5SZXNldFBhc3N3b3JkX2NvbnRhaW5lclxyXG57XHJcbiAgICBAaW5jbHVkZSBkaXNwbGF5RmxleDtcclxuICAgIG1hcmdpbi10b3A6MyU7XHJcbn0gICBcclxuLlJlc2V0UGFzc3dvcmRfY2FyZFxyXG57XHJcbiAgICBAaW5jbHVkZSBkaXNwbGF5RmxleCgkZGlyZWN0aW9uOmNvbHVtbiwkanVzdGlmeUNvbnRlbnQ6bm9uZSwkYWxpZ25JdGVtczpub25lKTtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBib3JkZXI6MC41cHggc29saWQgI0REREZFMjtcclxuICAgIC5SZXNldFBhc3N3b3JkX2lucHV0c1xyXG4gICAge1xyXG4gICAgICAgIEBpbmNsdWRlIGRpc3BsYXlGbGV4KCRkaXJlY3Rpb246Y29sdW1uLCRqdXN0aWZ5Q29udGVudDpub25lLCRhbGlnbkl0ZW1zOm5vbmUpO1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGgye1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTokZmZhbWlseTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWNhcmQtdGl0bGV7XHJcbiAgICAgICAgICAgIEBleHRlbmQgaDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbWF0LWxhYmVse1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1oaW50e1xyXG4gICAgICAgICAgICBmb250LXNpemU6ICRoaW50U2l6ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ1dHRvbl9jb250YWluZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGRpc3BsYXlGbGV4KCRqdXN0aWZ5Q29udGVudDpmbGV4LWVuZCwkYWxpZ25JdGVtczpub25lKTtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjc2hvd1Bhc3N3b3JkXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBkaXNwbGF5RmxleCgkanVzdGlmeUNvbnRlbnQ6ZmxleC1zdGFydCwkYWxpZ25JdGVtczpub25lKTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLlJlc2V0UGFzc3dvcmQtZm9ybVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgZGl2Om5vdCg6bGFzdC1jaGlsZCl7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XHJcbiAgICAuUmVzZXRQYXNzd29yZF9jYXJkXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuICAgIC5SZXNldFBhc3N3b3JkX2ltYWdlX2NvbnRhaW5lclxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLlJlc2V0UGFzc3dvcmRfY2FyZFxyXG4gICAge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcbiAgICAuUmVzZXRQYXNzd29yZF9pbnB1dHNcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogMTAwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBtYXQtZm9ybS1maWVsZHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG4gICAgLmZvcm0taW5wdXRcclxuICAgIHtcclxuICAgICAgICB3aWR0aDogOTAlIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5idXR0b25fY29udGFpbmVyXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDkwJSFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgLlJlc2V0UGFzc3dvcmRfY2FyZFxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuICAgIC5SZXNldFBhc3N3b3JkX2NvbnRhaW5lclxyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi10b3A6NDAlO1xyXG4gICAgfSAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgbWF0LWVycm9ye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ 5281:
/*!**************************************************************!*\
  !*** ./src/app/Services/HttpService/http-service.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HttpServiceService": () => (/* binding */ HttpServiceService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 3882);


class HttpServiceService {
    constructor(http) {
        this.http = http;
    }
    post(url, data = null, isHeaderRequired = false, headers = false) {
        console.log(url, data + "value");
        return this.http.post(url, data, isHeaderRequired && headers);
    }
    put(url, data = null, isHeaderRequired = false, headers = false) {
        console.log("httpservice", url, data);
        console.log(url, data + "value");
        return this.http.put(url, data, isHeaderRequired && headers);
    }
}
HttpServiceService.ɵfac = function HttpServiceService_Factory(t) { return new (t || HttpServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
HttpServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HttpServiceService, factory: HttpServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6438:
/*!**************************************************************!*\
  !*** ./src/app/Services/UserService/user-service.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserServiceService": () => (/* binding */ UserServiceService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _HttpService_http_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../HttpService/http-service.service */ 5281);



class UserServiceService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    Register(data) {
        const params = {
            FirstName: data.firstName,
            LastName: data.lastName,
            Email: data.email,
            Password: data.password
        };
        return this.httpService.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/api/register`, params);
    }
    Login(data) {
        const params = {
            Email: data.email,
            Password: data.password
        };
        return this.httpService.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/api/login`, params);
    }
    ForgetPassword(data) {
        return this.httpService.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/api/forgotPassword?email=${data}`);
    }
    ResetPassword(data) {
        const params = {
            Email: data.email,
            Password: data.password
        };
        return this.httpService.put(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl}/api/resetPassword`, params);
    }
}
UserServiceService.ɵfac = function UserServiceService_Factory(t) { return new (t || UserServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_HttpService_http_service_service__WEBPACK_IMPORTED_MODULE_1__.HttpServiceService)); };
UserServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserServiceService, factory: UserServiceService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 1258);
/* harmony import */ var _Components_register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/register/register.component */ 5498);
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/login/login.component */ 7171);
/* harmony import */ var _Components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/forget-password/forget-password.component */ 9805);
/* harmony import */ var _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/reset-password/reset-password.component */ 1698);
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/home/home.component */ 4611);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);








var token;
//token = localStorage.getItem('token');
const routes = [
    {
        path: 'register', component: _Components_register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent,
    },
    {
        path: 'login', component: _Components_login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent,
    },
    {
        path: 'forgetPassword', component: _Components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_2__.ForgetPasswordComponent,
    },
    {
        path: `resetPassword/${token}`, component: _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_3__.ResetPasswordComponent,
    },
    {
        path: `home`, component: _Components_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent,
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
                initialNavigation: 'enabled'
            })], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 1258);


class AppComponent {
    constructor() {
        this.title = 'FundooNotes';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _Components_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/register/register.component */ 5498);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 718);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slider */ 3616);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ 2323);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 2118);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 5788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 4742);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/checkbox */ 4058);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 781);
/* harmony import */ var _Components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/login/login.component */ 7171);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 2529);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/http */ 3882);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/snack-bar */ 8456);
/* harmony import */ var _Components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/forget-password/forget-password.component */ 9805);
/* harmony import */ var _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/reset-password/reset-password.component */ 1698);
/* harmony import */ var _Components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/home/home.component */ 4611);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/toolbar */ 4106);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ 6608);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/list */ 8417);
/* harmony import */ var _Components_add_note_add_note_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/add-note/add-note.component */ 9844);
/* harmony import */ var _Components_note_icons_note_icons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/note-icons/note-icons.component */ 466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common */ 4364);
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/text-field */ 6536);

































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule.withServerTransition({ appId: 'serverApp' }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule,
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBarModule,
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule,
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
            _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _Components_register_register_component__WEBPACK_IMPORTED_MODULE_2__.RegisterComponent,
        _Components_login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _Components_forget_password_forget_password_component__WEBPACK_IMPORTED_MODULE_4__.ForgetPasswordComponent,
        _Components_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_5__.ResetPasswordComponent,
        _Components_home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _Components_add_note_add_note_component__WEBPACK_IMPORTED_MODULE_7__.AddNoteComponent,
        _Components_note_icons_note_icons_component__WEBPACK_IMPORTED_MODULE_8__.NoteIconsComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_12__.MatSliderModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__.MatExpansionModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormFieldModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInputModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_17__.MatCheckboxModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIconModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_21__.HttpClientModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_22__.MatSnackBarModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_23__.MatToolbarModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__.MatSidenavModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetComponentScope"](_Components_add_note_add_note_component__WEBPACK_IMPORTED_MODULE_7__.AddNoteComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_26__.NgIf, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardSubtitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _angular_material_list__WEBPACK_IMPORTED_MODULE_25__.MatListIconCssMatStyler, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_27__.CdkTextareaAutosize, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardFooter, _Components_note_icons_note_icons_component__WEBPACK_IMPORTED_MODULE_8__.NoteIconsComponent], []);


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    baseUrl: 'https://localhost:44337',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 1570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
        .catch(err => console.error(err));
});


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map