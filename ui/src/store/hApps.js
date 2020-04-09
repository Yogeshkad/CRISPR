import { profiles } from './profiles.js'
import { personas } from './personas.js'
import { fieldNames } from './fieldNames.js'
import { items } from './foldersFiles.js'

export const hApps = [
  {
    id: 'QmCulture',
    name: 'Holochain-IDE',
    folder: '/Users/philipbeadle/holochain/hApps/Culture',
    url: '/happ-store/Culture',
    contact: 'Philip Beadle',
    mobile: '+61 999 999 999',
    description: 'IDE for building Holochain hApps from models and templates. Uses Holochain anchors as a git like source control with branching, permission control and traceability of changes.',
    zomes: [
      {
        id: 'QmCultureZome',
        name: 'Culture',
        anchors: [
          {
            type: 'branch',
            text: '',
            links: []
          },
          {
            type: 'branch',
            text: 'name of branch',
            links: [
              {
                direction: 'from',
                entityType: 'anchor',
                entityName: 'branch',
                type: 'anchor_link'
              }
            ]
          }
        ],
        entryTypes: [
          {
            name: 'hApp',
            update: true,
            delete: true,
            revisons: true,
            fields: [
              {
                id: 'Qm11',
                fieldName: 'name',
                fieldType: 'String'
              },
              {
                id: 'Qm11',
                fieldName: 'folder',
                fieldType: 'String'
              },
              {
                id: 'Qm11',
                fieldName: 'url',
                fieldType: 'String'
              },
              {
                id: 'Qm11',
                fieldName: 'contact',
                fieldType: 'String'
              },
              {
                id: 'Qm11',
                fieldName: 'mobile',
                fieldType: 'String'
              },
              {
                id: 'Qm11',
                fieldName: 'description',
                fieldType: 'String'
              }
            ],
            links: [
              {
                direction: 'from',
                entityType: 'anchor',
                entityName: 'branchname of branch',
                type: 'anchor_link'
              }
            ],
            permissionRules: {
              validateEntryCreate: '',
              validateEntryModify: '',
              validateEntryDelete: '',
              validateLinkAdd: '',
              validateLinkRemove: ''
            },
            testData: {
              create: {
                anchor: {
                  type: 'branch',
                  text: 'master'
                },
                name: 'hApp name',
                folder: '/hApp',
                url: '/happ-store/hApp',
                contact: 'Contact',
                mobile: '+61 999 999 999',
                description: 'hApp description'
              },
              update: {
                name: 'Update hApp name',
                folder: 'Update /hApp',
                url: 'Update /happ-store/hApp',
                contact: 'Update Contact',
                mobile: 'Update +61 999 999 999',
                description: 'Update hApp description'
              },
              list: []
            }
          },
          {
            name: 'zome',
            update: true,
            delete: true,
            revisons: true,
            anchors: [],
            fields: [
              {
                id: 'Qm11',
                fieldName: 'name',
                fieldType: 'String'
              },
              {
                id: 'Qm11',
                fieldName: 'description',
                fieldType: 'String'
              }
            ],
            links: [
              {
                direction: 'from',
                entityType: 'anchor',
                entityName: 'branchname of branch',
                type: 'anchor_link'
              }
            ],
            permissionRules: {
              validateEntryCreate: '',
              validateEntryModify: '',
              validateEntryDelete: '',
              validateLinkAdd: '',
              validateLinkRemove: ''
            },
            testData: {
              create: {
                anchor: {
                  type: 'branch',
                  text: 'master'
                },
                name: 'hApp name',
                folder: '/hApp',
                url: '/happ-store/hApp',
                contact: 'Contact',
                mobile: '+61 999 999 999',
                description: 'hApp description'
              },
              update: {
                name: 'Update hApp name',
                folder: 'Update /hApp',
                url: 'Update /happ-store/hApp',
                contact: 'Update Contact',
                mobile: 'Update +61 999 999 999',
                description: 'Update hApp description'
              },
              list: []
            }
          }
        ],
        profileSpecs: []
      }
    ],
    modules: []
  },
  {
    id: 'Qmmorebighashes333',
    name: 'Notes',
    folder: '/Users/philipbeadle/holochain/hApps/Notes',
    url: '/happ-store/Notes',
    contact: 'Philip Beadle',
    mobile: '+61 999 999 999',
    description: 'A Holochain hApp that demonstrates how to build a CRUD hApp with Holochain.\nSelecting permissions and roles generates the code for the Zome Pattern based on Entry Type fields and links.\nAlso shows how to integrate roles and permissions into Entry Types.',
    zomes: [
      {
        id: 'Qmmorehas444',
        name: 'Notes',
        anchors: [
          {
            type: 'root_anchor',
            text: '',
            links: []
          },
          {
            type: 'list_notes',
            text: '',
            links: [{
              direction: 'from',
              entityType: 'anchor',
              entityName: 'root_anchor',
              type: 'anchor_link'
            }]
          }
        ],
        entryTypes: [
          {
            name: 'Note',
            fields: [
              {
                id: 'Qm11',
                fieldName: 'id',
                fieldType: 'Address'
              },
              {
                id: 'Qm12',
                fieldName: 'created_at',
                fieldType: 'Iso8601'
              },
              {
                id: 'Qm11',
                fieldName: 'address',
                fieldType: 'Address'
              },
              {
                id: 'Qm12',
                fieldName: 'updated_at',
                fieldType: 'Iso8601'
              },
              {
                id: 'Qm1333',
                fieldName: 'title',
                fieldType: 'String'
              },
              {
                id: 'Qm2',
                fieldName: 'content',
                fieldType: 'String'
              }
            ],
            links: [
              {
                direction: 'from',
                entityType: 'anchor',
                entityName: 'list_notes',
                type: 'anchor_link'
              }
            ],
            pattern: `<h1>Pattern 3</h1>
            <h2>Constant Id Entry - linked to anchor --> can list entries</h2> 
            <ul>
            <li class="has-line-data" data-line-start="1" data-line-end="7">Developer defined fields
            <ul>
            <li class="has-line-data" data-line-start="2" data-line-end="3">id (reserved field name)</li>
            <li class="has-line-data" data-line-start="3" data-line-end="4">created_at (reserved field name)</li>
            <li class="has-line-data" data-line-start="4" data-line-end="5">updated_at (reserved field name)</li>
            <li class="has-line-data" data-line-start="5" data-line-end="6">title [textfield]</li>
            <li class="has-line-data" data-line-start="6" data-line-end="7">content [textarea]</li>
            </ul>
            </li>
            <li class="has-line-data" data-line-start="7" data-line-end="14">Generated Structs
            <ul>
            <li class="has-line-data" data-line-start="8" data-line-end="9">type_3_entry</li>
            <li class="has-line-data" data-line-start="9" data-line-end="12">type_3_id
            <ul>
            <li class="has-line-data" data-line-start="10" data-line-end="11">initial_entry_address [address of intial type_2_entry]</li>
            <li class="has-line-data" data-line-start="11" data-line-end="12">initial_entry_created_at [created_at of intial type_2_entry]</li>
            </ul>
            </li>
            <li class="has-line-data" data-line-start="12" data-line-end="14">type_3
            <ul>
            <li class="has-line-data" data-line-start="13" data-line-end="14">[type_3.id = address of type_3_id, type_3.created_at = type_3_id.created_at, type_3.updated_at = type_3_entry.created_at, type_3_entry]</li>
            </ul>
            </li>
            </ul>
            </li>
            <li class="has-line-data" data-line-start="14" data-line-end="17">Links
            <ul>
            <li class="has-line-data" data-line-start="15" data-line-end="16">from type_3_id</li>
            <li class="has-line-data" data-line-start="16" data-line-end="17">type_3_id from type_3</li>
            </ul>
            </li>
            <li class="has-line-data" data-line-start="17" data-line-end="20">Anchors
            <ul>
            <li class="has-line-data" data-line-start="18" data-line-end="19">AnchorType “type_3_list”</li>
            <li class="has-line-data" data-line-start="19" data-line-end="20">AnchorText “”</li>
            </ul>
            </li>
            <li class="has-line-data" data-line-start="20" data-line-end="36">zome_fns
            <ul>
            <li class="has-line-data" data-line-start="21" data-line-end="28">[] create_entry(type_3_entry) --&gt; type_3[type_3.id = Address type_3_id, type_3.created_at = type_3_id.initial_entry_created_at, type_3.updated_at = type_3_id.initial_entry_created_at]
            <ul>
            <li class="has-line-data" data-line-start="22" data-line-end="23">commit type_3_entry</li>
            <li class="has-line-data" data-line-start="23" data-line-end="26">new type_3_id
            <ul>
            <li class="has-line-data" data-line-start="24" data-line-end="25">initial_entry_address [address of intial type_3_entry]</li>
            <li class="has-line-data" data-line-start="25" data-line-end="26">initial_entry_created_at [created_at of intial type_3_entry]</li>
            </ul>
            </li>
            <li class="has-line-data" data-line-start="26" data-line-end="27">link type_3_id --&gt; new type_3_entry</li>
            <li class="has-line-data" data-line-start="27" data-line-end="28">link type_3_list --&gt; new type_3_id</li>
            </ul>
            </li>
            <li class="has-line-data" data-line-start="28" data-line-end="31">[] modify_entry(type_3) --&gt; type_3[type_3.updated_at = type_3_entry.timestamp]
            <ul>
            <li class="has-line-data" data-line-start="29" data-line-end="30">link type_3_id --&gt; new type_3_entry</li>
            <li class="has-line-data" data-line-start="30" data-line-end="31">Remove old link type_3_id --&gt; previous type_3_entry</li>
            </ul>
            </li>
            <li class="has-line-data" data-line-start="31" data-line-end="36">[] remove_entry(type_3.Id) --&gt; Address
            <ul>
            <li class="has-line-data" data-line-start="32" data-line-end="33">Remove link type_3_id --&gt; type_3_entry</li>
            <li class="has-line-data" data-line-start="33" data-line-end="34">Remove link type_3_list --&gt; type_3_id</li>
            <li class="has-line-data" data-line-start="34" data-line-end="35">Remove type_3_id</li>
            <li class="has-line-data" data-line-start="35" data-line-end="36">Remove type_3_entry</li>
            </ul>
            </li>
            </ul>
            </li>
            <li class="has-line-data" data-line-start="36" data-line-end="43">UI
            <ul>
            <li class="has-line-data" data-line-start="37" data-line-end="43">Item
            <ul>
            <li class="has-line-data" data-line-start="38" data-line-end="39">id [text]</li>
            <li class="has-line-data" data-line-start="39" data-line-end="40">created_at [text]</li>
            <li class="has-line-data" data-line-start="40" data-line-end="41">updated_at [text]</li>
            <li class="has-line-data" data-line-start="41" data-line-end="42">title [textfield]</li>
            <li class="has-line-data" data-line-start="42" data-line-end="43">content [textarea]</li>
            </ul>
            </li>
            </ul>
            </li>
            </ul>`
          }
        ],
        profileSpecs: [],
        items: items
      },
      {
        id: 'Qmmorehas444',
        name: 'Notes',
        anchors: [
          {
            name: '',
            type: 'Notes',
            text: 'ListNotes',
            links: []
          }
        ],
        entryTypes: [
          {
            name: 'NoteId',
            fields: [
              {
                id: 'Qm11',
                fieldName: 'initial_entry_address',
                fieldType: 'String'
              },
              {
                id: 'Qm12',
                fieldName: 'initial_entry_created_at',
                fieldType: 'Iso8601'
              }
            ],
            links: [
              {
                direction: 'from',
                entityType: 'anchor',
                entityName: 'NotesListNotes',
                type: 'notes'
              }
            ]
          },
          {
            name: 'NoteEntry',
            update: true,
            delete: true,
            fields: [
              {
                id: 'Qm1333',
                fieldName: 'title',
                fieldType: 'String'
              },
              {
                id: 'Qm2',
                fieldName: 'content',
                fieldType: 'String'
              }
            ],
            links: [
              {
                direction: 'from',
                entityType: 'entryType',
                entityName: 'NoteId',
                type: 'entry'
              }
            ],
            permissionRules: {
              validateEntryCreate: '',
              validateEntryModify: '',
              validateEntryDelete: '',
              validateLinkAdd: '',
              validateLinkRemove: ''
            },
            testData: {
              create: { title: 'Note 1 title', content: 'Note 1 content' },
              update: [
                { title: 'Updated Note 1 title', content: 'Updated Note 1 content' },
                { title: 'Updated Again Note 1 title', content: 'Updated Again Note 1 content' }
              ],
              list: [
                { title: 'Note 1 title', content: 'Note 1 content' },
                { title: 'Note 2 title', content: 'Note 2 content' },
                { title: 'Note 3 title', content: 'Note 3 content' },
                { title: 'Note 4 title', content: 'Note 4 content' }
              ]
            }
          }
        ],
        profileSpecs: []
      }
    ],
    modules: [{
      name: 'Profile Website Builder',
      data: {
        profiles: profiles,
        personas: personas,
        fieldNames: fieldNames
      }
    }]
  },
  {
    name: 'personas-profiles',
    folder: '/Users/philipbeadle/holochain/hApps/personas-profiles',
    url: '/entry-types',
    contact: 'Philip Beadle',
    mobile: '+61 999 999 999',
    description: 'Manage personal information. Information requested by hApps is mapped to the hApp from the players personal my-info hApp.',
    zomes: []
  }
]