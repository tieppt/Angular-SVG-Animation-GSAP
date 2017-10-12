import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild, NgZone, AfterViewInit, ChangeDetectorRef, EventEmitter, Output } from '@angular/core';
import { TweenMax, TimelineMax, Power1, Back, Power3 } from 'gsap';
import { Anticipate } from 'gsap-functions';


@Component({
  selector: 'tpc-all-devices',
  templateUrl: './all-devices.component.html',
  styleUrls: ['./all-devices.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllDevicesComponent implements OnInit, AfterViewInit {

  @ViewChild('monitorContentGroup') monitorContentGroup: ElementRef;
  @ViewChild('monitorGroup') monitorGroup: ElementRef;
  @ViewChild('monitorScreen') monitorScreen: ElementRef;
  @ViewChild('monitorLogo') monitorLogo: ElementRef;
  @ViewChild('monitorStand') monitorStand: ElementRef;
  @ViewChild('monitorStandShadow') monitorStandShadow: ElementRef;
  @ViewChild('monitorBottom') monitorBottom: ElementRef;
  @ViewChild('monitorEdge') monitorEdge: ElementRef;
  @ViewChild('laptopContentGroup') laptopContentGroup: ElementRef;
  @ViewChild('laptopGroup') laptopGroup: ElementRef;
  @ViewChild('laptopScreen') laptopScreen: ElementRef;
  @ViewChild('laptopEdgeLeft') laptopEdgeLeft: ElementRef;
  @ViewChild('laptopEdgeRight') laptopEdgeRight: ElementRef;
  @ViewChild('laptopTrackpad') laptopTrackpad: ElementRef;
  @ViewChild('laptopBase') laptopBase: ElementRef;
  @ViewChild('tabletContentGroup') tabletContentGroup: ElementRef;
  @ViewChild('tabletGroup') tabletGroup: ElementRef;
  @ViewChild('tabletButton') tabletButton: ElementRef;
  @ViewChild('tabletCamera') tabletCamera: ElementRef;
  @ViewChild('tabletScreen') tabletScreen: ElementRef;
  @ViewChild('phoneGroup') phoneGroup: ElementRef;
  @ViewChild('phoneButton') phoneButton: ElementRef;
  @ViewChild('phoneCamera') phoneCamera: ElementRef;
  @ViewChild('phoneSpeaker') phoneSpeaker: ElementRef;

  timeLine: TimelineMax;

  @Output() completed = new EventEmitter<boolean>();

  constructor(
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
    this.timeLine = new TimelineMax({ repeat: 0, delay: 1, yoyo: false, paused: true });
    this.timeLine.eventCallback("onComplete", () => this.completed.emit(true));
  }

  ngOnInit() {
    const monitorContentGroupChildren = this.monitorContentGroup.nativeElement.querySelectorAll('path');
    const laptopContentGroupChildren = this.laptopContentGroup.nativeElement.querySelectorAll('path');
    const tcgp = this.tabletContentGroup.nativeElement.querySelectorAll('path');

    const f = this.monitorScreen.nativeElement;
    const g = this.monitorLogo.nativeElement;
    const h = this.monitorStand.nativeElement;
    const u = this.monitorStandShadow.nativeElement;
    const c = this.monitorBottom.nativeElement;
    const v = this.monitorEdge.nativeElement;
    const w = this.laptopContentGroup.nativeElement;
    const x = this.laptopGroup.nativeElement;
    const d = this.laptopScreen.nativeElement;
    const k = this.laptopEdgeLeft.nativeElement;
    const l = this.laptopEdgeRight.nativeElement;
    const m = this.laptopTrackpad.nativeElement;
    const n = this.laptopBase.nativeElement;

    const e = this.tabletContentGroup.nativeElement;
    const b = this.tabletGroup.nativeElement;
    const p = this.tabletButton.nativeElement;
    const q = this.tabletCamera.nativeElement;
    const y = this.tabletScreen.nativeElement;
    const r = this.phoneGroup.nativeElement;
    const z = this.phoneButton.nativeElement;
    const A = this.phoneCamera.nativeElement;
    const a = this.phoneSpeaker.nativeElement;

    const B = this.timeLine;

    TweenMax.set([c], { transformOrigin: "50% 100%" });
    TweenMax.set([h, n, y], { transformOrigin: "50% 0%" });
    TweenMax.set([g, f, d, m, b, x, p, q, e, z, A, a, w, r], {
      transformOrigin: "50% 50%"
    });
    TweenMax.set([k, l], { transformOrigin: "0% 100%" });
    TweenMax.set(b, { rotation: -90 });
    B.timeScale(3);
    B.from(c, 1, { scaleY: 0, ease: Power1.easeOut })
      .from(h, 1, { y: -70, ease: Power1.easeOut }, "-=1")
      .from(u, 0.5, { alpha: 0, ease: Power1.easeIn }, "-=0.5")
      .from(v, 1, { y: 330 }, "-=0.25")
      .from(f, 2, { y: 330, ease: Power1.easeOut }, "-=1")
      .staggerFrom(monitorContentGroupChildren, 1, { scaleX: 0 }, 0.1, "-=0.51")
      .from(g, 1, { scale: 0, ease: Back.easeOut.config(2) })
      .staggerTo(monitorContentGroupChildren, 1, { alpha: 0, delay: 2 }, 0.1)
      .to(f, 1, { y: 330, ease: Power1.easeIn }, "-=1")
      .to(v, 1, { y: 330, ease: Power1.easeIn }, "-=0.75")
      .to(c, 1, { scaleX: 0.69, y: -23 })
      .to(c, 1, { scaleY: 0.45, alpha: 1 }, "-=1")
      .set(c, { alpha: 0 })
      .to(g, 0.5, { scale: 0, ease: Back.easeIn }, "-=1")
      .to(h, 1, { y: -120 }, "-=1.5")
      .to(u, 0.5, { alpha: 0 }, "-=1.5")
      .from(n, 1, { alpha: 0 }, "-=1")
      .from(m, 1, { scaleX: 0 }, "-=1")
      .from(d, 1, { scale: 0, ease: Back.easeOut.config(0.5) })
      .from(k, 2, { skewX: -40, scaleY: 0, ease: Power3.easeOut }, "-=2")
      .from(l, 2, { skewX: 40, scaleY: 0, ease: Power3.easeOut }, "-=2")
      .staggerFrom(laptopContentGroupChildren, 1, { scaleX: 0 }, 0.1)
      .to(m, 0.3, { alpha: 0, delay: 2 })
      .to(d, 1, { scaleX: 0.67 })
      .to(d, 1, { scaleY: 0.8 }, "-=1")
      .to(w, 1, { alpha: 0, scale: 0.5 }, "-=1")
      .to(n, 1, { y: -20, scaleX: 0 }, "-=1")
      .to(
        k,
        1,
        {
          x: 40,
          transformOrigin: "50% 50%",
          scaleY: 0.85
        },
        "-=1"
      )
      .to(l, 1, { x: -40, transformOrigin: "50% 50%", scaleY: 0.85 }, "-=1")
      .set(x, { alpha: 0 })
      .from(b, 1, { scale: 1.1, alpha: 0 }, "-=1")
      .to(b, 2, { rotation: 0, delay: 2, ease: Anticipate.easeOut })
      .staggerFrom([p, q], 0.5, { scale: 0, ease: Back.easeOut }, 0.1, "-=1")
      .from(
        e,
        2,
        { rotation: 90, scaleX: 1.33, scaleY: 0.8, ease: Power3.easeInOut },
        "-=0"
      )
      .to([p, q], 0.5, { scale: 0, delay: 2 })
      .to(b, 1, { scaleX: 0.45 })
      .to(b, 1, { scaleY: 0.7 }, "-=1")
      .to(e, 1, { y: -5 }, "-=1")
      .to(y, 0.5, { scaleY: 0.92, y: 4 }, "-=0.5")
      .set(r, { alpha: 1 })
      .set([b, e], { alpha: 0 })
      .staggerFrom([z, A, a], 1, { scale: 0, ease: Back.easeOut }, 0.1)
      .to(r, 2, { y: 80, delay: 2, ease: Back.easeIn.config(2) });
  }

  ngAfterViewInit() {
    this.cdr.detach();
    this.startAnimate();
  }

  startAnimate() {
    this.zone.runOutsideAngular(() => this._animate());
  }

  private _animate() {
    TweenMax.set("svg", { visibility: "hidden" });

    this.timeLine.play(0);
    TweenMax.set("svg", { visibility: "visible" });
  }

}
