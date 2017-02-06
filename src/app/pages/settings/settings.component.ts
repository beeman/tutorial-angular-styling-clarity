import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <form>
      <section class="form-block">
        <div class="form-group">
          <label for="formGroupExampleInput">Toggles</label>
          <div class="toggle-switch">
            <input type="checkbox" id="toggle_1">
            <label for="toggle_1">Toggles turn on and off</label>
          </div>
        </div>
        <div class="form-group">
          <div class="toggle-switch">
            <input type="checkbox" id="toggle_2" disabled>
            <label for="toggle_2">Toggle off and disabled</label>
          </div>
        </div>
        <div class="form-group">
          <div class="toggle-switch">
            <input type="checkbox" id="toggle_3" checked disabled>
            <label for="toggle_3">Toggle on and disabled</label>
          </div>
        </div>
      </section>
      <section class="form-block">
        <div class="form-group">
          <label for="formGroupExampleInput">Toggles without any label</label>
          <div class="toggle-switch">
            <input type="checkbox" id="toggle_4">
            <label for="toggle_4"></label>
          </div>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Toggles without any label</label>
          <div class="toggle-switch">
            <input type="checkbox" id="toggle_5" checked>
            <label for="toggle_5"></label>
          </div>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Toggles without any label</label>
          <div class="toggle-switch">
            <input type="checkbox" id="toggle_6" checked disabled>
            <label for="toggle_6"></label>
          </div>
        </div>
        <div class="form-group">
          <label for="formGroupExampleInput">Toggles without any label</label>
          <div class="toggle-switch">
            <input type="checkbox" id="toggle_7" disabled>
            <label for="toggle_7"></label>
          </div>
        </div>
      </section>
      
      <section class="form-block">
        <label>Static Checkboxes</label>
        <div class="form-group">
          <label>Default/Stacked checkbox group</label>
          <div class="checkbox">
            <input type="checkbox" id="checkrads_1">
            <label for="checkrads_1">Checkbox 1</label>
          </div>
          <div class="checkbox">
            <input type="checkbox" id="checkrads_2" checked>
            <label for="checkrads_2">Checkbox 2</label>
          </div>
          <div class="checkbox disabled">
            <input type="checkbox" id="checkrads_3" disabled>
            <label for="checkrads_3">A disabled and unchecked checkbox</label>
          </div>
          <div class="checkbox disabled">
            <input type="checkbox" id="checkrads_4" disabled checked>
            <label for="checkrads_4">A disabled and checked checkbox</label>
          </div>
        </div>
        <div class="form-group">
          <label>Inline checkbox group</label>
          <div class="checkbox-inline">
            <input type="checkbox" id="checkrads_5">
            <label for="checkrads_5">Checkbox 1</label>
          </div>
          <div class="checkbox-inline">
            <input type="checkbox" id="checkrads_6" checked>
            <label for="checkrads_6">Checkbox 2</label>
          </div>
          <div class="checkbox-inline disabled">
            <input type="checkbox" id="checkrads_7" disabled>
            <label for="checkrads_7">A disabled and unchecked checkbox</label>
          </div>
          <div class="checkbox-inline disabled">
            <input type="checkbox" id="checkrads_8" disabled checked>
            <label for="checkrads_8">A disabled and checked checkbox</label>
          </div>
        </div>
      </section>
    </form>
  `,
  styles: []
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
