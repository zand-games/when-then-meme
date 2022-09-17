import { LitElement, html, css } from "lit";
import { store } from "./store";
import { StoreSubscriber } from "lit-svelte-stores";
import "./emoji-selector";
export class MemeSVG extends LitElement {
  constructor() {
    super();
  }
  //   createRenderRoot() {
  //     return this;
  //   }
  firstUpdated() {
    super.firstUpdated();
  }
  _store = new StoreSubscriber(this, () => store);
  emoji_changed_when(e) {
    store.update((val) => {
      val.when_face = e.detail;
      return val;
    });
  }
  whenchanged(e) {
    store.update((val) => {
      val.when_txt = e.target.value;
      return val;
    });
  }
  thenchanged(e) {
    //console.log(e.target.value);
    store.update((val) => {
      val.then_txt = e.target.value;
      return val;
    });
  }
  emoji_changed_then(e) {
    store.update((val) => {
      val.then_face = e.detail;
      return val;
    });
  }

  emoji_when_cat_changed(e) {
    debugger;
    this.shadowRoot.getElementById("emoji_selector_when").selectedItem =
      e.target.value;

    this.shadowRoot.getElementById("emoji_selector_when").selectedCategory =
      e.target.selectedOptions[0].text;
  }
  emoji_then_cat_changed(e) {
    debugger;
    this.shadowRoot.getElementById("emoji_selector_then").selectedItem =
      e.target.value;

    this.shadowRoot.getElementById("emoji_selector_then").selectedCategory =
      e.target.selectedOptions[0].text;
  }
  render() {
    return html`
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        viewbox="0 0 450 600">
       
        <g>
         
        <g id="g24">
        <g id="then" transform="translate(-9.3980344,37.592138)">
           <g id="g1677" transform="matrix(-1.5316635,0,0,-1.4860372,745.73204,602.07665)">
              <g id="g669" transform="matrix(0.77669541,0,0,-0.56671342,241.82663,190.41321)">
              
              <path
                    d="m 0,0 c -30.885,30.702 -45.668,74.068 -51.548,116.399 -0.866,6.235 -1.488,12.508 -1.89,18.789 -0.491,7.677 -2.134,15.09 -3,22.747 -2.944,26.008 0.846,53.549 16.667,75.041 15.798,21.461 41.366,32.701 66.576,38.615 20.713,4.86 42.406,7.242 63.661,8.09 33.856,1.351 68.218,-2.358 100.988,-10.952 30.62,-8.03 62.321,-21.126 84.143,-44.881 9.79,-10.657 16.673,-23.629 19.561,-37.827 3.356,-16.486 0.588,-33.563 -4.771,-49.301 -3.334,-9.789 -7.882,-19.13 -12.948,-28.128 -6.247,-11.1 -15.767,-18.582 -26.893,-24.482 -11.147,-5.911 -23.312,-9.688 -35.432,-13.02 -15.099,-4.152 -30.406,-7.54 -45.84,-10.187 -30.472,-5.225 -61.298,-6.574 -92.079,-3.652 -29.199,2.772 -58.52,9.728 -83.993,24.69 -0.805,0.473 -1.991,0.055 -2.203,-0.897 -5.972,-26.731 -4.242,-57.432 6.645,-82.861 0.76,-1.774 3.343,-0.245 2.591,1.513 -10.266,23.979 -12.116,54.708 -6.343,80.551 L -8.312,79.35 c 24.047,-14.124 51.256,-21.014 78.75,-24.368 29.454,-3.593 59.097,-2.79 88.451,1.29 28.067,3.902 57.214,9.84 83.484,20.733 10.416,4.319 20.4,9.945 28.546,17.823 7.702,7.447 12.471,17.821 16.878,27.43 13.19,28.752 17.234,61.832 0.319,89.92 -15.576,25.866 -44.001,41.562 -71.486,51.785 -31.896,11.865 -66.293,17.34 -100.202,18.692 -16.114,0.642 -32.173,0.021 -48.203,-1.669 -24.161,-2.546 -48.522,-6.068 -70.944,-15.879 -22.271,-9.743 -40.71,-26.735 -50.113,-49.323 -9.609,-23.082 -8.928,-49.571 -4.145,-73.677 0.886,-4.463 0.667,-9.304 1.076,-13.842 0.645,-7.14 1.605,-14.253 2.785,-21.324 3.294,-19.73 8.753,-39.102 16.646,-57.491 C -28.271,30.349 -16.893,12.563 -2.121,-2.121 -0.748,-3.486 1.374,-1.365 0,0"
                    style="fill:#737982;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path671" />
              </g>
              <g id="g673" transform="matrix(0.77669541,0,0,-0.56671342,237.53507,189.46878)">
                 <path
                    d="m 0,0 c -30.981,30.797 -45.81,74.287 -51.57,116.773 -0.823,6.067 -1.439,12.169 -1.815,18.281 -0.471,7.669 -2.14,15.099 -3.006,22.746 -3.056,27 1.471,55.755 19.251,77.127 16.829,20.228 41.924,30.592 67.015,36.102 20.245,4.445 41.329,6.755 62.042,7.52 33.912,1.251 68.384,-2.512 101.18,-11.235 30.397,-8.085 61.875,-21.203 83.55,-44.799 9.846,-10.718 16.876,-23.812 19.624,-38.144 3.217,-16.781 0.107,-33.993 -5.597,-49.878 -3.542,-9.862 -8.3,-19.265 -13.549,-28.318 C 270.856,95.363 259.861,88.186 248.926,82.753 237.828,77.24 225.881,73.65 213.96,70.418 198.324,66.18 182.464,62.774 166.475,60.177 136.513,55.312 106.238,54.229 76.033,57.253 47.216,60.139 18.396,67.139 -6.748,81.908 c -0.806,0.473 -1.196,-0.915 -1.303,-1.397 -6.022,-26.956 -4.209,-58.016 6.766,-83.652 0.883,-2.061 2.011,1.635 1.499,2.828 -10.399,24.29 -11.948,54.126 -6.221,79.76 -0.435,-0.465 -0.869,-0.931 -1.304,-1.397 24.38,-14.32 52.081,-21.187 79.965,-24.431 30.028,-3.494 60.225,-2.456 90.092,1.979 27.353,4.061 55.853,9.94 81.391,20.837 10.599,4.523 20.76,10.56 28.674,19.033 7.167,7.674 11.783,18.225 15.974,27.731 12.589,28.548 15.949,61.34 -0.689,88.97 -15.675,26.03 -44.3,41.785 -72.003,51.957 -31.91,11.717 -66.252,17.142 -100.132,18.399 -16.294,0.604 -32.5,-0.132 -48.704,-1.865 -24.435,-2.613 -49.21,-6.343 -71.669,-16.823 -22.119,-10.32 -39.796,-27.972 -48.448,-50.914 -4.254,-11.278 -6.004,-23.408 -6.44,-35.402 -0.215,-5.895 0.07,-11.796 0.558,-17.669 0.26,-3.12 0.659,-6.226 1.1,-9.324 0.484,-3.403 1.794,-7.096 1.902,-10.501 0.985,-31.321 7.995,-63.138 20.342,-91.901 C -27.203,29.034 -15.836,11.224 -1.07,-3.454 0.274,-4.79 0.942,-0.937 0,0"
                    style="fill:#737982;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path675" />
              </g>
              <g id="g677" transform="matrix(0.77669541,0,0,-0.56671342,-199.38949,567.08008)">
                 <g id="g679" />
                 <g id="g691">
                    <g clip-path="url(#clipPath683-0)" opacity="0.5" id="g689">
                       <g transform="translate(569.3594,672.2041)" id="g687">
                          <path
                             d="m 0,0 c -31.206,29.3 -46.553,71.917 -52.166,113.532 -0.77,5.715 -1.338,11.461 -1.669,17.218 -0.139,2.409 -0.343,4.539 -0.834,6.928 -1.35,6.56 -2.235,13.211 -2.681,19.892 -1.756,26.319 4.858,52.986 23.951,71.982 18.573,18.478 44.097,27.003 69.323,31.598 20.139,3.668 40.83,5.762 61.307,6.152 34.593,0.658 69.668,-3.375 103.018,-12.671 29.846,-8.318 61.444,-21.631 81.564,-46.2 8.982,-10.969 14.747,-24.239 16.153,-38.372 1.687,-16.97 -2.866,-33.946 -9.777,-49.319 -4.392,-9.774 -9.513,-20.297 -17.174,-27.918 C 262.192,84.043 250.381,78.5 238.865,74.207 226.15,69.466 212.851,66.263 199.636,63.274 183.961,59.729 168.107,56.956 152.146,55.07 124.868,51.848 97.373,51.762 70.084,54.905 c -26.571,3.06 -53.216,9.576 -76.68,22.753 -0.274,0.154 -0.656,0.017 -0.732,-0.301 -4.235,-17.684 -4.12,-36.055 -0.651,-53.857 1.588,-8.149 3.757,-16.513 7.196,-24.108 0.265,-0.587 1.126,-0.077 0.863,0.505 -3.228,7.132 -5.238,14.958 -6.835,22.586 -3.762,17.968 -3.891,36.726 0.392,54.61 -0.244,-0.1 -0.489,-0.2 -0.733,-0.301 24.661,-13.849 52.663,-20.275 80.582,-23.266 30.035,-3.218 60.196,-2.244 90.072,2.037 15.614,2.237 31.095,5.364 46.412,9.12 12.3,3.016 24.528,6.402 36.203,11.366 10.669,4.536 21.172,10.593 28.755,19.53 3.453,4.069 6.023,8.901 8.58,13.56 2.464,4.491 4.713,9.099 6.736,13.804 6.416,14.917 10.301,31.24 8.679,47.537 -1.347,13.533 -6.779,26.329 -15.11,37.031 -19.116,24.554 -49.733,38.109 -78.8,46.787 -33.053,9.868 -67.995,14.142 -102.442,14.061 -19.057,-0.045 -38.103,-1.888 -56.95,-4.624 -24.805,-3.6 -49.984,-10.11 -70.342,-25.376 -9.949,-7.462 -18.283,-16.856 -24.023,-27.909 -5.64,-10.859 -8.501,-22.972 -9.508,-35.112 -1.051,-12.669 0.121,-25.482 2.617,-37.919 0.962,-4.794 0.948,-9.727 1.407,-14.602 C -50.629,84.577 -38.77,45.453 -14.939,14.86 -10.612,9.305 -5.835,4.108 -0.703,-0.711 -0.234,-1.151 0.472,-0.443 0,0"
                             style="fill:#737982;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path685" />
                       </g>
                    </g>
                 </g>
              </g>
           </g>
          

       
           <path style="display:inline;fill:${this._store.value.then_color};fill-opacity:1;stroke-width:1.10565"
              d="m 208.96806,587.00803 c -2.73649,-0.22857 -11.94103,-0.95185 -20.45455,-1.60728 -44.85426,-3.4532 -95.8594,-14.12965 -118.485468,-24.80151 -36.49089,-17.21138 -54.578735,-41.23873 -50.164008,-66.63637 3.151803,-18.13212 17.843984,-43.15367 31.016977,-52.82354 15.437415,-11.3321 40.301986,-18.86679 83.476949,-25.29595 85.94382,-12.79784 167.72455,-9.72945 223.93244,8.40189 11.22357,3.62046 14.644,4.34394 15.32532,3.24156 0.59307,-0.95962 2.11739,-1.18643 4.7077,-0.70048 3.71048,0.69609 3.87232,0.57961 5.15832,-3.7127 3.26774,-10.90674 3.9926,-28.08823 1.68607,-39.96554 -0.43927,-2.26208 0.59868,-1.55922 5.71468,3.86978 17.90566,19.00109 31.07745,47.3144 35.49125,76.28992 0.92632,6.08108 2.45198,14.29054 3.39035,18.24325 9.90118,41.707 -9.77564,73.04909 -56.05402,89.28527 -29.66638,10.40807 -69.88026,15.61227 -125.4914,16.24023 -18.85135,0.21288 -36.51412,0.20004 -39.25061,-0.0285 z"
              id="path2996" transform="translate(9.3980344,-37.592138)" />
        </g>
        <g id="when" transform="translate(-106.61425,78.810811)">
         
        
           <path style="display:inline;fill:${this._store.value.when_color};fill-opacity:1;stroke-width:1.10565"
              d="M 38.495223,216.61576 C 27.033976,192.51028 22.113022,171.6143 22.113022,147.0516 c 0,-24.5257 5.202908,-45.73431 16.72,-68.155716 7.389477,-14.385791 13.553987,-22.617489 22.140761,-29.565371 17.397598,-14.077052 38.76493,-20.68936 87.736287,-27.150762 39.99363,-5.276858 64.0317,-6.094014 115.54054,-3.927716 65.51895,2.755518 86.76128,5.759389 112.22679,15.869957 18.30132,7.26617 37.98634,21.742268 43.15355,31.734544 11.40796,22.06057 9.8187,50.163544 -4.0404,71.446644 -5.17217,7.94278 -19.82054,22.34611 -28.66508,28.18557 -25.2423,16.66581 -60.36692,27.03719 -104.98444,30.99918 -24.51732,2.17711 -102.45661,1.82143 -128.25553,-0.58529 -27.25128,-2.54222 -61.530565,-6.90086 -75.365911,-9.58284 -10.027574,-1.94384 -11.354751,-1.99527 -12.460719,-0.48276 -1.006826,1.37691 -2.12711,1.49298 -6.003528,0.62201 -4.695128,-1.05493 -4.787618,-1.01838 -6.243892,2.46698 -2.350675,5.62595 -5.991203,20.84458 -7.481223,31.27401 l -1.370334,9.59167 z"
              id="path5289" transform="translate(106.61425,-78.810811)" />
           <g id="g1823" transform="matrix(-1.0636037,0,0,-0.84906747,601.56019,309.30014)">
              <g id="g645" transform="matrix(1.0864835,0,0,1.2121633,58.600889,343.62231)">
                 <path
                    d="m 0,0 c 2.577,21.59 13.911,39.642 31.748,51.924 16.773,11.549 37.106,17.264 57.003,20.441 10.331,1.649 20.765,2.373 31.212,2.709 16.232,0.522 32.435,1.737 48.663,2.375 31.899,1.255 63.707,-1.874 95.075,-7.689 14.534,-2.696 30.064,-5.994 43.307,-12.766 12.169,-6.223 21.935,-16.753 29.18,-28.165 7.472,-11.771 13.307,-25.015 17.48,-38.285 14.133,-44.949 6.341,-92.572 -16.248,-133.363 -3.4,-6.139 -7.173,-12.066 -11.118,-17.866 0.913,-0.384 1.827,-0.77 2.741,-1.155 1.374,5.721 1.524,11.852 1.542,17.696 0.05,16.868 -3.313,33.683 -8.241,49.748 -0.239,0.778 -1.041,1.273 -1.845,1.047 -14.377,-4.029 -29.761,-5.846 -44.521,-7.928 -16.081,-2.268 -32.257,-3.844 -48.462,-4.888 -31.547,-2.032 -63.253,-1.621 -94.735,1.225 C 88.09,-100.9 37.295,-89.742 11.094,-49.264 1.594,-34.587 -1.782,-17.264 0,0 0.198,1.924 -2.804,1.904 -3,0 -5.116,-20.498 0.204,-40.714 12.916,-57.044 25.47,-73.172 43.007,-84.822 61.703,-92.71 c 22.158,-9.349 45.41,-12.745 69.199,-15.054 31.463,-3.054 63.175,-3.363 94.72,-1.517 15.857,0.927 31.689,2.475 47.429,4.602 15.988,2.16 32.682,4.075 48.245,8.438 -0.614,0.348 -1.23,0.698 -1.845,1.048 4.772,-15.555 7.9,-31.586 8.128,-47.89 0.082,-5.907 -0.04,-12.175 -1.429,-17.96 -0.408,-1.699 1.793,-2.55 2.742,-1.155 27.422,40.309 41.353,88.251 31.939,136.713 -2.77,14.261 -7.569,28.166 -14.057,41.161 -9.338,18.704 -21.556,35.934 -40.918,45.229 -12.768,6.13 -27.535,9.105 -41.357,11.747 -14.487,2.77 -29.163,4.483 -43.807,6.171 -32.309,3.726 -64.488,0.727 -96.84,-0.605 C 85.524,76.639 41.475,71.195 14.439,40.697 4.338,29.303 -1.209,15.003 -3,0 -3.229,-1.918 -0.227,-1.896 0,0"
                    style="fill:#737982;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path647" />
              </g>
              <g id="g649" transform="matrix(1.0864835,0,0,1.2121633,52.649675,351.46356)">
                 <path
                    d="m 0,0 c 2.58,21.614 13.901,39.531 31.751,51.822 16.791,11.562 37.159,17.34 57.079,20.521 9.812,1.566 19.739,2.376 29.666,2.7 16.233,0.529 32.436,1.679 48.661,2.361 31.531,1.325 62.753,-1.588 93.816,-7.008 14.944,-2.609 30.423,-5.943 44.323,-12.183 12.431,-5.58 22.609,-15.768 30.216,-26.883 8.03,-11.734 14.183,-25.588 18.592,-39.062 14.736,-45.043 7.047,-92.893 -15.662,-133.899 -3.399,-6.139 -7.171,-12.065 -11.117,-17.865 0.555,-0.808 1.11,-1.615 1.664,-2.424 1.425,5.934 1.615,12.24 1.633,18.308 0.051,17.08 -3.34,34.087 -8.332,50.358 -0.179,0.584 -0.541,1.103 -1.197,0.919 -14.871,-4.169 -30.826,-6.006 -46.101,-8.114 -15.599,-2.155 -31.284,-3.672 -46.999,-4.685 -31.547,-2.032 -63.253,-1.621 -94.734,1.225 C 88.755,-99.886 38.316,-88.925 11.685,-49.093 1.974,-34.568 -1.785,-17.292 0,0 c 0.195,1.898 -1.768,3.744 -2.045,1.063 -2.089,-20.236 2.69,-39.685 14.512,-56.292 11.965,-16.808 30.01,-28.699 48.647,-36.921 21.748,-9.597 44.911,-13.043 68.388,-15.401 31.449,-3.158 63.156,-3.562 94.703,-1.81 16.987,0.943 33.93,2.634 50.787,4.912 15.47,2.09 31.61,4.037 46.665,8.257 -0.399,0.306 -0.799,0.613 -1.197,0.919 5.993,-19.537 11.399,-45.05 6.699,-64.627 -0.233,-0.973 0.339,-4.372 1.664,-2.424 27.331,40.174 41.323,88.083 32.269,136.432 -2.695,14.391 -7.381,28.424 -13.801,41.578 -8.916,18.267 -20.481,35.14 -38.767,45.063 -12.159,6.599 -26.905,9.553 -40.352,12.29 -14.927,3.038 -30.083,4.856 -45.204,6.608 -32.308,3.746 -64.335,1.097 -96.694,-0.318 C 87.464,77.632 42.921,72.893 15.442,41.896 5.348,30.507 -0.255,16.058 -2.045,1.063 -2.272,-0.842 -0.319,-2.675 0,0"
                    style="fill:#737982;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path651" />
              </g>
              <g id="g653" transform="matrix(1.0864835,0,0,1.2121633,-993.16812,73.345397)">
                 <g id="g655" />
                 <g id="g667">
                    <g clip-path="url(#clipPath659)" opacity="0.600006" id="g665">
                       <g transform="translate(972.5166,230.084)" id="g663">
                          <path
                             d="m 0,0 c 2.568,21.518 13.515,39.641 31.176,52.138 17.157,12.139 38.26,18.026 58.791,21.183 10.645,1.637 21.352,2.255 32.103,2.636 16.232,0.574 32.434,1.786 48.665,2.377 31.869,1.16 63.808,-2.146 95.11,-8.13 14.476,-2.768 29.961,-6.146 43.002,-13.224 11.749,-6.376 21.179,-16.717 28.273,-27.892 7.512,-11.835 13.365,-25.176 17.561,-38.518 14.021,-44.594 6.628,-91.943 -15.45,-132.623 -3.638,-6.704 -7.716,-13.163 -12.005,-19.467 0.624,0.027 1.247,0.052 1.871,0.079 1.424,5.93 1.515,12.302 1.482,18.359 -0.091,16.443 -3.377,32.764 -8.183,48.433 -0.126,0.41 -0.801,0.337 -1.104,0.253 -14.879,-4.17 -30.833,-6.025 -46.12,-8.135 -15.601,-2.155 -31.285,-3.672 -46.999,-4.685 -32.092,-2.067 -64.354,-1.59 -96.369,1.411 -44.526,4.173 -94.547,15.84 -120.578,56.056 C 1.655,-34.963 -1.796,-17.396 0,0 c 0.085,0.817 -1.864,0.46 -1.936,-0.227 -2.148,-20.81 3.442,-40.7 16.296,-57.215 12.681,-16.29 31.027,-27.63 49.888,-35.41 21.921,-9.042 45.253,-12.077 68.696,-14.274 30.929,-2.899 62.085,-3.145 93.086,-1.331 16.353,0.957 32.661,2.607 48.893,4.801 15.455,2.088 31.598,4.018 46.644,8.236 -0.368,0.084 -0.736,0.169 -1.103,0.253 4.895,-15.959 8.094,-32.47 8.185,-49.204 0.032,-5.698 -0.149,-11.72 -1.488,-17.297 -0.201,-0.839 1.611,-0.303 1.871,0.078 27.451,40.351 41.391,88.434 31.637,136.912 -2.852,14.176 -7.695,27.997 -14.267,40.875 -9.688,18.986 -22.417,36.477 -42.715,44.956 C 276.918,72.335 246.54,74.921 218.007,78.194 185.708,81.9 153.195,78.178 120.864,77.033 83.908,75.726 41.119,68.883 15.252,39.703 5.353,28.535 -0.179,14.49 -1.936,-0.227 -2.032,-1.038 -0.082,-0.688 0,0"
                             style="fill:#737982;fill-opacity:1;fill-rule:nonzero;stroke:none" id="path661" />
                       </g>
                    </g>
                 </g>
              </g>
           </g>
        </g>
     </g>                   
 
 <foreignObject x="10" y="235" width="290" height="150">
           <emoji-selector
              id="emoji_selector_when"
              selectedCategory="Crypto"    
              selectedItem = 1                       
              @emoji_changed="${this.emoji_changed_when}"
            ></emoji-selector>
      </foreignObject>
        <foreignObject x="300" y="210" width="290" height="150">
           <emoji-selector
              id="emoji_selector_then" 
              selectedCategory="Crypto"             
              selectedItem = 2                       
              @emoji_changed="${this.emoji_changed_then}"              
            ></emoji-selector>
      </foreignObject>    
 <use xlink:href="#path1" x="0" y="0"  />
        <text x="50" y="80" font-family="Carter One" font-size="1.5em" style="fill:black">
        When,
      </text>
      
        <text x="50" y="470" font-family="Carter One"  font-size="1.5em" style="fill:black">
       Then,
      </text>      
     
      <foreignObject x="125" y="57" width="290" height="150">
        <div 
          xmlns="http://www.w3.org/1999/xhtml"
          style="
            width: 100%; height: 100%;
            border: none;
            font-size: 20px;
            overflow: none; 
            border-radius: 15px;
            background-color:transparent;            
            font-family:Caveat;">
          <!-- <p>${this._store.value.when_txt}</p> -->
          <textarea xmlns="http://www.w3.org/1999/xhtml"
          placeholder="${this._store.value.when_txt}"
          @change="${this.whenchanged}"
          style="width:285px;
          height:140px;
          border:none;resize:none;
          background: transparent;          
          border:0; border-radius: 15px;
          font-family:${this._store.value.when_font};
          font-size:${this._store.value.when_fontsize}px;
          "
          ></textarea>
        </div>
      </foreignObject>
      <foreignObject
        x="115" y="447" width="290" height="150"
      >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          style="
            width: 100%; height: 100%;
            border: none;
            font-size: 20px;
            overflow: none; 
            background-color:transparent;
            font-family:Comfortaa;
          "
        >
        <textarea xmlns="http://www.w3.org/1999/xhtml"
          placeholder="${this._store.value.then_txt}"
          @change="${this.thenchanged}"
          style="width:285px;
          height:140px;
          border:none;resize:none;
          background: transparent;                    
          border:0; border-radius: 15px;
          font-family:${this._store.value.when_font};
          font-size:${this._store.value.when_fontsize}px;
          "
          ></textarea>          
        </div>
      </foreignObject>
      <foreignObject x="70" y="230" width="120" height="50">
            <select
              id="when_cat_select"
              class="form-control"
              @change="${this.emoji_when_cat_changed}"
            >
              <option value="1" selected>Crypto</option>
              <option value="3">Animals</option>
              <option value="5">Emojis</option>              
            </select>
     </foreignObject>
     <foreignObject x="280" y="370" width="120" height="50">
            <select
              id="then_cat_select"
              class="form-control"
              @change="${this.emoji_then_cat_changed}"
            >
              <option value="2" selected>Crypto</option>
              <option value="2">Animals</option>
              <option value="2">Emojis</option>              
            </select>
     </foreignObject>
      </svg>     
    `;
  }
}

customElements.define("meme-svg", MemeSVG);
