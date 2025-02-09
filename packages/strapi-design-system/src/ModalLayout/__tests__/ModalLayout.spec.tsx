import { render } from '@testing-library/react';

import { Button } from '../../Button';
import { ThemeProvider } from '../../ThemeProvider';
import { lightTheme } from '../../themes';
import { ModalLayout, ModalHeader, ModalBody, ModalFooter } from '../index';

describe('ModalLayout', () => {
  it('should render component and match snapshot', () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ModalLayout onClose={() => jest.fn()} labelledBy="title">
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>Hello World</ModalBody>
          <ModalFooter
            startActions={
              <Button onClick={() => jest.fn} variant="tertiary">
                Cancel
              </Button>
            }
            endActions={
              <>
                <Button variant="secondary">Add new stuff</Button>
                <Button onClick={() => jest.fn()}>Finish</Button>
              </>
            }
          />
        </ModalLayout>
      </ThemeProvider>,
    );

    expect(document.body).toMatchInlineSnapshot(`
      .c18 {
        font-size: 0.75rem;
        line-height: 1.33;
        font-weight: 600;
        line-height: 0;
        color: #ffffff;
      }

      .c1 {
        padding-right: 40px;
        padding-left: 40px;
        position: fixed;
        z-index: 4;
      }

      .c4 {
        background: #ffffff;
        border-radius: 4px;
        box-shadow: 0px 2px 15px rgba(33,33,52,0.1);
        width: 51.875rem;
      }

      .c5 {
        background: #f6f6f9;
        padding-top: 16px;
        padding-right: 20px;
        padding-bottom: 16px;
        padding-left: 20px;
      }

      .c8 {
        background: #ffffff;
        padding: 8px;
        border-radius: 4px;
        border-color: #dcdce4;
        border: 1px solid #dcdce4;
        width: 2rem;
        height: 2rem;
        cursor: pointer;
      }

      .c11 {
        padding: 32px;
      }

      .c15 {
        background: #4945ff;
        padding: 8px;
        padding-right: 16px;
        padding-left: 16px;
        border-radius: 4px;
        border-color: #4945ff;
        border: 1px solid #4945ff;
        cursor: pointer;
      }

      .c2 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: center;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
      }

      .c7 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        -ms-flex-pack: justify;
        justify-content: space-between;
      }

      .c14 {
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        gap: 8px;
      }

      .c9 {
        position: relative;
        outline: none;
      }

      .c9 > svg {
        height: 12px;
        width: 12px;
      }

      .c9 > svg > g,
      .c9 > svg path {
        fill: #ffffff;
      }

      .c9[aria-disabled='true'] {
        pointer-events: none;
      }

      .c9:after {
        -webkit-transition-property: all;
        transition-property: all;
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -4px;
        bottom: -4px;
        left: -4px;
        right: -4px;
        border: 2px solid transparent;
      }

      .c9:focus-visible {
        outline: none;
      }

      .c9:focus-visible:after {
        border-radius: 8px;
        content: '';
        position: absolute;
        top: -5px;
        bottom: -5px;
        left: -5px;
        right: -5px;
        border: 2px solid #4945ff;
      }

      .c16 {
        height: 2rem;
        border: 1px solid #dcdce4;
        background: #ffffff;
      }

      .c16 svg {
        height: 0.75rem;
        width: auto;
      }

      .c16[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c16[aria-disabled='true'] .c17 {
        color: #666687;
      }

      .c16[aria-disabled='true'] svg > g,
      .c16[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c16[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c16[aria-disabled='true']:active .c17 {
        color: #666687;
      }

      .c16[aria-disabled='true']:active svg > g,
      .c16[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c16:hover {
        background-color: #f6f6f9;
      }

      .c16:active {
        background-color: #eaeaef;
      }

      .c16 .c17 {
        color: #32324d;
      }

      .c16 svg > g,
      .c16 svg path {
        fill: #32324d;
      }

      .c19 {
        height: 2rem;
        border: 1px solid #d9d8ff;
        background: #f0f0ff;
      }

      .c19 svg {
        height: 0.75rem;
        width: auto;
      }

      .c19[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c19[aria-disabled='true'] .c17 {
        color: #666687;
      }

      .c19[aria-disabled='true'] svg > g,
      .c19[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c19[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c19[aria-disabled='true']:active .c17 {
        color: #666687;
      }

      .c19[aria-disabled='true']:active svg > g,
      .c19[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c19:hover {
        background-color: #ffffff;
      }

      .c19:active {
        background-color: #ffffff;
        border: 1px solid #4945ff;
      }

      .c19:active .c17 {
        color: #4945ff;
      }

      .c19:active svg > g,
      .c19:active svg path {
        fill: #4945ff;
      }

      .c19 .c17 {
        color: #271fe0;
      }

      .c19 svg > g,
      .c19 svg path {
        fill: #271fe0;
      }

      .c20 {
        height: 2rem;
      }

      .c20 svg {
        height: 0.75rem;
        width: auto;
      }

      .c20[aria-disabled='true'] {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c20[aria-disabled='true'] .c17 {
        color: #666687;
      }

      .c20[aria-disabled='true'] svg > g,
      .c20[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c20[aria-disabled='true']:active {
        border: 1px solid #dcdce4;
        background: #eaeaef;
      }

      .c20[aria-disabled='true']:active .c17 {
        color: #666687;
      }

      .c20[aria-disabled='true']:active svg > g,
      .c20[aria-disabled='true']:active svg path {
        fill: #666687;
      }

      .c20:hover {
        border: 1px solid #7b79ff;
        background: #7b79ff;
      }

      .c20:active {
        border: 1px solid #4945ff;
        background: #4945ff;
      }

      .c20 svg > g,
      .c20 svg path {
        fill: #ffffff;
      }

      .c0 {
        border: 0;
        -webkit-clip: rect(0 0 0 0);
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }

      .c3 {
        background: #32324d1F;
        inset: 0;
      }

      .c10 svg > g,
      .c10 svg path {
        fill: #8e8ea9;
      }

      .c10:hover svg > g,
      .c10:hover svg path {
        fill: #666687;
      }

      .c10:active svg > g,
      .c10:active svg path {
        fill: #a5a5ba;
      }

      .c10[aria-disabled='true'] svg path {
        fill: #666687;
      }

      .c6 {
        border-radius: 4px 4px 0 0;
        border-bottom: 1px solid #eaeaef;
      }

      .c13 {
        border-radius: 0 0 4px 4px;
        border-top: 1px solid #eaeaef;
      }

      .c12 {
        overflow: auto;
        max-height: 60vh;
      }

      <body
        class="lock-body-scroll"
      >
        <div>
          <div
            class="c0"
          >
            <p
              aria-live="polite"
              aria-relevant="all"
              id="live-region-log"
              role="log"
            />
            <p
              aria-live="polite"
              aria-relevant="all"
              id="live-region-status"
              role="status"
            />
            <p
              aria-live="assertive"
              aria-relevant="all"
              id="live-region-alert"
              role="alert"
            />
          </div>
        </div>
        <div
          class=""
        >
          <div
            class="c1 c2 c3"
          >
            <div>
              <div>
                <div
                  aria-labelledby="title"
                  aria-modal="true"
                  class="c4"
                  role="dialog"
                >
                  <div
                    class="c5 c6"
                  >
                    <div
                      class="c7"
                    >
                      Modal Title
                      <button
                        aria-disabled="false"
                        class="c8 c2 c9 c10"
                        type="button"
                      >
                        <span
                          class="c0"
                        >
                          Close the modal
                        </span>
                        <svg
                          aria-hidden="true"
                          fill="none"
                          focusable="false"
                          height="1rem"
                          viewBox="0 0 24 24"
                          width="1rem"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M24 2.417 21.583 0 12 9.583 2.417 0 0 2.417 9.583 12 0 21.583 2.417 24 12 14.417 21.583 24 24 21.583 14.417 12 24 2.417Z"
                            fill="#212134"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    class="c11 c12"
                  >
                    Hello World
                  </div>
                  <div
                    class="c5 c13"
                  >
                    <div
                      class="c7"
                    >
                      <div
                        class="c14"
                      >
                        <button
                          aria-disabled="false"
                          class="c15 c14 c9 c16"
                          type="button"
                        >
                          <span
                            class="c17 c18"
                          >
                            Cancel
                          </span>
                        </button>
                      </div>
                      <div
                        class="c14"
                      >
                        <button
                          aria-disabled="false"
                          class="c15 c14 c9 c19"
                          type="button"
                        >
                          <span
                            class="c17 c18"
                          >
                            Add new stuff
                          </span>
                        </button>
                        <button
                          aria-disabled="false"
                          class="c15 c14 c9 c20"
                          type="button"
                        >
                          <span
                            class="c17 c18"
                          >
                            Finish
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    `);
  });
});
