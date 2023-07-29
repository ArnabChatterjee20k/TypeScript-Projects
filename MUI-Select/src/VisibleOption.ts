export class VisibleOption {
  private visible: boolean;
  constructor(
    public renderCallback: Function | null,
    public removeCallback: Function | null
  ) {
    this.visible = false;
  }
  public set setVisible(v: boolean) {
    this.visible = v;
    if (this.visible) {
      this.renderCallback && this.renderCallback();
    } else {
      this.removeCallback && this.removeCallback();
    }
  }

  public get getVisible():boolean{
    return this.visible
  }
}
